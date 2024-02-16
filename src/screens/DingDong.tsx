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
  value: number;
}

interface Zone {
  title: string;
}
const DingDong = ({navigation}: any) => {
  const [zones, setZones] = useState<any>([]);
  const [_zones, _setZones] = useState<any>([]);
  const [values, setValues] = useState<Item[]>([]);
  const [_values, _setValues] = useState<Zone[]>([]);
  function getZones() {
    const Zones = DB.getAllByDeviceNumber(5, options.device_id);
    setTimeout(() => {
      setZones(Zones);
    }, 1000);
  }
  function _getZones() {
    const Zones = DB.getAllByDeviceNumber(4, options.device_id);
    setTimeout(() => {
      _setZones(Zones);
    }, 1000);
  }

  const toggleSwitch = (i: number, value: number) => {
    const vals = values;
    vals[i].value = value;
    setValues([...vals]);
  };

  function getState() {
    const states = DB.getAllByDeviceNumber(5, options.device_id);
    if (!states[0]) {
      DB.insert(5, {
        zone_id: 1,
        value: 1,
        device_id: options.device_id,
        state: 0,
      });
      DB.insert(5, {
        zone_id: 2,
        value: 1,
        device_id: options.device_id,
        state: 0,
      });
      DB.insert(5, {
        zone_id: 3,
        value: 1,
        device_id: options.device_id,
        state: 0,
      });
      DB.insert(5, {
        zone_id: 4,
        value: 1,
        device_id: options.device_id,
        state: 0,
      });
      getZones();
    }
  }

  useEffect(() => {
    getState();
    getZones();
    _getZones();
  }, []);

  // const update = (i: number, value: number, state: number) => {
  //   const newVals = values;
  //   newVals[i].value = value;
  //   newVals[i].state = state;
  //   setValues([...newVals]);
  // };

  const save = () => {
    zones.map((el: any, i: any) => {
      DB.update(5, el.id, {
        value: values[i].value,
      });
    });
    ToastAndroid.show('با موفقیت ذخیره شد', ToastAndroid.LONG);
  };

  useEffect(() => {
    if (zones.length === 4) {
      let items: Item[] = [];
      zones.map((el: any, i: any) => {
        items.push({value: el.value});
      });
      setValues([...items]);
    }
  }, [zones]);

  useEffect(() => {
    if (zones.length === 4) {
      let items: Zone[] = [];
      _zones.map((el: any, i: any) => {
        items.push({title: el.title});
      });
      _setValues([...items]);
    }
    
  }, [_zones]);

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <View style={styles.top}>
          <Text style={styles.item}>هنگام باز و بسته شدن</Text>
          <Text style={styles.item}>هنگام بسته شدن</Text>
          <Text style={styles.item}>هنگام باز شدن</Text>
          <Text style={styles.item}>نام زون </Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.middleItem}>
            {values?.length === 4 && (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#C1E1C1'}}
                    thumbColor={
                      (values[0].value === 0 ? true : false)
                        ? '#2AAA8A'
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={val => toggleSwitch(0, val ? 0 : 3)}
                    value={values[0].value === 0 ? true : false}
                  />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#C1E1C1'}}
                    thumbColor={
                      (values[0].value === 1 ? true : false)
                        ? '#2AAA8A'
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={val => toggleSwitch(0, val ? 1 : 3)}
                    value={values[0].value === 1 ? true : false}
                  />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#C1E1C1'}}
                    thumbColor={
                      (values[0].value === 2 ? true : false)
                        ? '#2AAA8A'
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={val => toggleSwitch(0, val ? 2 : 3)}
                    value={values[0].value === 2 ? true : false}
                  />
               
                </View>
              </>
            )}
               <Text style={[styles.item, {fontSize: 14}]}>
                    {_values[0]?.title}
                  </Text>
          </View>

          <View style={styles.middleItem}>
            {values?.length === 4 && (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#C1E1C1'}}
                    thumbColor={
                      (values[1].value === 0 ? true : false)
                        ? '#2AAA8A'
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={val => toggleSwitch(1, val ? 0 : 3)}
                    value={values[1].value === 0 ? true : false}
                  />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#C1E1C1'}}
                    thumbColor={
                      (values[1].value === 1 ? true : false)
                        ? '#2AAA8A'
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={val => toggleSwitch(1, val ? 1 : 3)}
                    value={values[1].value === 1 ? true : false}
                  />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#C1E1C1'}}
                    thumbColor={
                      (values[1].value === 2 ? true : false)
                        ? '#2AAA8A'
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={val => toggleSwitch(1, val ? 2 : 3)}
                    value={values[1].value === 2 ? true : false}
                  />
                </View>
              </>
            )}
            <Text style={[styles.item, {fontSize: 14}]}>  {_values[1]?.title}</Text>
          </View>

          <View style={styles.middleItem}>
            {values?.length === 4 && (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#C1E1C1'}}
                    thumbColor={
                      (values[2].value === 0 ? true : false)
                        ? '#2AAA8A'
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={val => toggleSwitch(2, val ? 0 : 3)}
                    value={values[2].value === 0 ? true : false}
                  />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#C1E1C1'}}
                    thumbColor={
                      (values[2].value === 1 ? true : false)
                        ? '#2AAA8A'
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={val => toggleSwitch(2, val ? 1 : 3)}
                    value={values[2].value === 1 ? true : false}
                  />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#C1E1C1'}}
                    thumbColor={
                      (values[2].value === 2 ? true : false)
                        ? '#2AAA8A'
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={val => toggleSwitch(2, val ? 2 : 3)}
                    value={values[2].value === 2 ? true : false}
                  />
                </View>
              </>
            )}
            <Text style={[styles.item, {fontSize: 14}]}>  {_values[2]?.title}</Text>
          </View>

          <View style={styles.middleItem}>
            {values?.length === 4 && (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#C1E1C1'}}
                    thumbColor={
                      (values[3].value === 0 ? true : false)
                        ? '#2AAA8A'
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={val => toggleSwitch(3, val ? 0 : 3)}
                    value={values[3].value === 0 ? true : false}
                  />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#C1E1C1'}}
                    thumbColor={
                      (values[3].value === 1 ? true : false)
                        ? '#2AAA8A'
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={val => toggleSwitch(3, val ? 1 : 3)}
                    value={values[3].value === 1 ? true : false}
                  />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#C1E1C1'}}
                    thumbColor={
                      (values[3].value === 2 ? true : false)
                        ? '#2AAA8A'
                        : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={val => toggleSwitch(3, val ? 2 : 3)}
                    value={values[3].value === 2 ? true : false}
                  />
                </View>
              </>
            )}
            <Text style={[styles.item, {fontSize: 14}]}>  {_values[3]?.title}</Text>
          </View>
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
    justifyContent: 'flex-end',
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

export default DingDong;
