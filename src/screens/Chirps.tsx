import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Switch,
} from 'react-native';
import {commonStyles} from '../utils/commonStyles';
import {DB, options} from '../utils/globals';

interface Item {
  title: string;
  inside: number;
  outside: number;
  outside_alarm: number;
}

const Chirps = ({navigation}: any) => {
  const [chirps_, setchirps_] = useState<any>([]);
  const [values, setValues] = useState<Item[]>([]);
  function getchirps_() {
    const chirps_ = DB.getAllByDeviceNumber(11, options.device_id);
    setTimeout(() => {
      setchirps_(chirps_);
    }, 1000);
  }
  const toggleSwitch = (i: number, value: number, type: string) => {
    const vals = values;
    switch (type) {
      case 'outside':
        vals[i].outside = value;
        break;
        case 'outside_alarm':
        vals[i].outside_alarm = value;
        break;
      case 'inside':
        vals[i].inside = value;
        break;
    }
    setValues([...vals]);
  };

  function getState() {
    const states = DB.getAllByDeviceNumber(11, options.device_id);
    if (!states[0]) {
      DB.insert(11, {
        zone_id: 1,
        device_id: options.device_id,
        title: 'فعال',
        inside: 0,
        outside: 0,
        outside_alarm: 0,
      });
      DB.insert(11, {
        zone_id: 2,
        value: 1,
        device_id: options.device_id,
        title: 'غیرفعال',
        inside: 0,
        outside: 0,
        outside_alarm: 0,
      });
      DB.insert(11, {
        zone_id: 3,
        value: 1,
        device_id: options.device_id,
        title: 'در خانه',
        inside: 0,
        outside: 0,
        outside_alarm: 0,
      });
      DB.insert(11, {
        zone_id: 4,
        value: 1,
        device_id: options.device_id,
        title: 'یادآوری',
        inside: 0,
        outside: 0,
        outside_alarm: 0,
      });
      getchirps_();
    }
  }

  useEffect(() => {
    getState();
    getchirps_();
  }, []);

  const save = () => {
    chirps_.map((el: any, i: any) => {
      DB.update(11, el.id, {
        title: values[i].title,
        inside: values[i].inside,
        outside: values[i].outside,
        outside_alarm: values[i].outside_alarm,
      });
    });
    ToastAndroid.show('با موفقیت ذخیره شد', ToastAndroid.LONG);
  };

  useEffect(() => {
    if (chirps_.length === 4) {
      let items: Item[] = [];
      chirps_.map((el: any, i: any) => {
        items.push({
          title: el.title,
          inside: el.inside,
          outside: el.outside,
          outside_alarm: el.outside_alarm,
        });
      });
      setValues([...items]);
    }
  }, [chirps_]);

  function rowComponent(i: number) {
    return (
      <View style={styles.middleItem}>
        {values?.length === 4 && (
          <>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Switch
                trackColor={{false: '#767577', true: '#C1E1C1'}}
                thumbColor={
                  (values[i].outside_alarm === 1 ? true : false) ? '#2AAA8A' : '#f4f3f4'
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={val => toggleSwitch(i, (val ? 1 : 0), 'outside_alarm')}
                value={values[i].outside_alarm === 1 ? true : false}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Switch
                trackColor={{false: '#767577', true: '#C1E1C1'}}
                thumbColor={
                  (values[i].outside === 1 ? true : false) ? '#2AAA8A' : '#f4f3f4'
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={val => toggleSwitch(i, (val ? 1 : 0), 'outside')}
                value={values[i].outside === 1 ? true : false}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Switch
                trackColor={{false: '#767577', true: '#C1E1C1'}}
                thumbColor={
                  (values[i].inside === 1 ? true : false) ? '#2AAA8A' : '#f4f3f4'
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={val => toggleSwitch(i, (val ? 1 : 0), 'inside')}
                value={values[i].inside === 1 ? true : false}
              />
            </View>
          </>
        )}
        <Text style={[styles.item, {fontSize: 14}]}>{values[i]?.title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <View style={styles.top}>
          <Text style={styles.item}>آژیر بیرونی</Text>
          <Text style={styles.item}>بلندگو بیرونی</Text>
          <Text style={styles.item}>بلندگو داخلی</Text>
          <Text style={styles.item}>عنوان</Text>
        </View>
        <View style={styles.middle}>
        {rowComponent(0)}
        {rowComponent(1)}
        {rowComponent(2)}
        {rowComponent(3)}
        </View>
        <View style={styles.bottom}>
          <View style={{flexDirection: 'row', gap: 30}}>
            <TouchableOpacity style={styles.addButton} onPress={save}>
              <Text style={commonStyles.addButtonText}>ذخیره</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ProButton]}
              onPress={() => {
                navigation.navigate('home');
              }}>
              <Text style={commonStyles.addButtonText}>لغو</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    margin: '10%',
  },
  container_inner: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: '#B8860B',
    borderWidth: 1,
    borderColor: 'darkgoldenrod', // Set your button background color
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  declineButton: {
    backgroundColor: '#adadad',
    borderWidth: 1,
    borderColor: 'gray', // Set your button background color
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40,
  },
  ProButton: {
    backgroundColor: '#adadad',
    borderWidth: 1,
    borderColor: 'gray', // Set your button background color
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40,
    width: '40%',
  },
  top: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    width: '100%',
    borderRadius: 5,
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
    padding: 15,
  },
  input: {
    borderWidth: 1,
    minWidth: 80,
    borderColor: '#000',
    height: 35,
    borderRadius: 5,
    paddingTop: 5,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  middle: {
    width: '100%',
    borderRadius: 5,
    flexDirection: 'column',
    padding: 10,
    gap: 10,
    flex: 1,
  },
  item: {
    fontSize: 10,
    fontFamily: 'Samim',
    color: '#333',
  },
  middleItem: {
    backgroundColor: '#efefef',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#333',
    height: 50,
    shadowOffset: {
      width: -4, // Negative value creates a shadow to the left
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1,
  },
  bottom: {
    width: '100%',
  },
});

export default Chirps;
