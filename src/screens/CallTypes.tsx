import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Switch,
  TextInput,
  Image,
} from 'react-native';
import {commonStyles} from '../utils/commonStyles';
import {DB, options} from '../utils/globals';
import SelectDropdown from 'react-native-select-dropdown';

interface Item {
  value: number;
}

const CallTypes = ({navigation}: any) => {
  const [callTypes, setCallTypes] = useState<any>([]);
  const [values, setValues] = useState<Item[]>([]);
  function getCallTypes() {
    const CallTypes = DB.getAllByDeviceNumber(12, options.device_id);
    setTimeout(() => {
      setCallTypes(CallTypes);
    }, 1000);
  }

  const toggleSwitch = (i: number, value: number) => {
    const vals = values;
    vals[i].value = value;
    setValues([...vals]);
  };

  function getState() {
    const states = DB.getAllByDeviceNumber(12, options.device_id);
    if (!states[0]) {
      DB.insert(12, {
        device_id: options.device_id,
        value: 1,
        state: 0,
      });
      getCallTypes();
    }
  }

  useEffect(() => {
    getState();
    getCallTypes();
  }, []);


  const save = () => {
    callTypes.map((el: any, i: any) => {
      DB.update(12, el.id, {
        value: values[i].value,
      });
    });
    ToastAndroid.show('با موفقیت ذخیره شد', ToastAndroid.LONG);
  };

  useEffect(() => {
    if (callTypes.length === 1) {
      let items: Item[] = [];
      callTypes.map((el: any, i: any) => {
        items.push({value: el.value});
      });
      setValues([...items]);
    }
  }, [callTypes]);

  function rowComponent(i: number, id: number, title: string) {
    return (
      <View style={styles.middleItem}>
        {values?.length === 1 && (
          <>
            <View style={{justifyContent: 'center', alignItems: 'flex-start', flex: 0.5}}>
              <Switch
                trackColor={{false: '#767577', true: '#C1E1C1'}}
                thumbColor={
                  (values[i].value === id ? true : false) ? '#2AAA8A' : '#f4f3f4'
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={val => toggleSwitch(i, val ? id : 0)}
                value={values[i].value === id ? true : false}
              />
            </View>

            <View style={{flex: 2, justifyContent: 'flex-end'}}>
              <Text style={[styles.item, {textAlign: 'center', fontSize: 10}]}>
                {title}
              </Text>
            </View>

            <View style={{flex: 0.2, justifyContent: 'flex-end'}}>
              <Text style={[styles.item, {textAlign: 'right'}]}>
                {id}
              </Text>
            </View>
          </>
        )}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <View style={styles.top}>
          <Text style={styles.item}>فعال/غیرفعال</Text>
          <Text style={styles.item}>نام</Text>
          <Text style={styles.item}>ردیف</Text>
        </View>
        <View style={styles.middle}>
          {rowComponent(0, 1, 'ارسال پیامک>تماس از سیم کارت>تماس از خط ثابت')}
          {rowComponent(0, 2, 'تماس از سیم کارت>ارسال پیامک>تماس از خط ثابت')}
          {rowComponent(0, 3, 'تماس از خط ثابت>ارسال پیامک>تماس از سیم کارت')}
          {rowComponent(0, 4, 'ارسال پیامک > تماس از سیم کارت')}
          {rowComponent(0, 5, 'تماس از سیم کارت>ارسال پیامک')}
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
                options.device_id = 0;
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
    width: '90%',
    margin: '5%',
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
    gap: 25,
    padding: 10,
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
    fontSize: 14,
    fontFamily: 'Samim',
    color: '#333',
  },
  middleItem: {
    backgroundColor: '#efefef',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
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

export default CallTypes;
