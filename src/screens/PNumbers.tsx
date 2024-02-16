import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Switch,
  TextInput,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import {commonStyles} from '../utils/commonStyles';
import {DB, options} from '../utils/globals';

interface Item {
  value: string;
  title: string;
  sms: number;
  call: number;
  state: number;
}
const PNumbers = ({navigation}: any) => {
  const [pnumbers, setPNumbers] = useState<any>([]);
  const [values, setValues] = useState<Item[]>([]);
  const [selectNew, setSelectNew] = useState<null | number>(null);
  const [firstPhoneNumber, setFirstPhoneNumber] = useState<any>('');
  const [secondPhoneNumber, setSecondPhoneNumber] = useState<any>('');
  function getPNumbers() {
    const _PNumbers = DB.getAllByDeviceNumber(8, options.device_id);
    setTimeout(() => {
      setPNumbers(_PNumbers);
    }, 1000);
  }

  function getState() {
    const states = DB.getAllByDeviceNumber(8, options.device_id);
    if (!states[0]) {
      DB.insert(8, {
        pn_id: 1,
        title: 'شماره 01',
        call: 0,
        sms: 0,
        value: '09121234567',
        device_id: options.device_id,
        state: 0,
      });
      DB.insert(8, {
        pn_id: 2,
        value: '09121234567',
        device_id: options.device_id,
        title: 'شماره 02',
        call: 0,
        sms: 0,
        state: 0,
      });
      DB.insert(8, {
        pn_id: 3,
        value: '09121234567',
        device_id: options.device_id,
        title: 'شماره 03',
        call: 0,
        sms: 0,
        state: 0,
      });
      DB.insert(8, {
        pn_id: 4,
        value: '09121234567',
        device_id: options.device_id,
        title: 'شماره 04',
        call: 0,
        sms: 0,
        state: 0,
      });
      DB.insert(8, {
        pn_id: 5,
        value: '09121234567',
        device_id: options.device_id,
        title: 'شماره 05',
        call: 0,
        sms: 0,
        state: 0,
      });
      DB.insert(8, {
        pn_id: 6,
        value: '09121234567',
        device_id: options.device_id,
        title: 'شماره 06',
        call: 0,
        sms: 0,
        state: 0,
      });
      DB.insert(8, {
        pn_id: 7,
        value: '09121234567',
        device_id: options.device_id,
        title: 'شماره 07',
        call: 0,
        sms: 0,
        state: 0,
      });
      DB.insert(8, {
        pn_id: 8,
        value: '09121234567',
        device_id: options.device_id,
        title: 'شماره 08',
        call: 0,
        sms: 0,
        state: 0,
      });
      DB.insert(8, {
        pn_id: 9,
        value: '09121234567',
        device_id: options.device_id,
        title: 'شماره 09',
        call: 0,
        sms: 0,
        state: 0,
      });
      DB.insert(8, {
        pn_id: 10,
        value: '09121234567',
        device_id: options.device_id,
        title: 'شماره 10',
        call: 0,
        sms: 0,
        state: 0,
      });
      getPNumbers();
    }
  }

  useEffect(() => {
    getState();
    getPNumbers();
  }, []);

  const update = (i: number, value: string) => {
    const newVals = values;
    newVals[i].value = value;
    setValues([...newVals]);
  };

  const save = () => {
    pnumbers.map((el: any, i: any) => {
      DB.update(8, el.id, {
        value: values[i].value,
        title: values[i].title,
        call: values[i].call,
        sms: values[i].sms,
        state: values[i].state,
      });
    });
    ToastAndroid.show('با موفقیت ذخیره شد', ToastAndroid.LONG);
  };

  useEffect(() => {
    if (pnumbers.length === 10) {
      let items: Item[] = [];
      pnumbers.map((el: any, i: any) => {
        items.push({
          value: el.value,
          title: el.title,
          call: el.call,
          sms: el.sms,
          state: el.state,
        });
      });

      setValues([...items]);
    }
  }, [pnumbers]);

  const toggleSwitchCall = (i: number, value: boolean) => {
    const vals = values;
    vals[i].call = value ? 1 : 0;
    setValues([...vals]);
  };

  const toggleSwitchSms = (i: number, value: boolean) => {
    const vals = values;
    vals[i].sms = value ? 1 : 0;
    setValues([...vals]);
  };

  const toggleSwitchState = (i: number, value: boolean) => {
    const vals = values;
    vals[i].state = value ? 1 : 0;
    setValues([...vals]);
  };

  const updateTitle = (i: number, title: string) => {
    const newVals = values;
    newVals[i].title = title;
    setValues([...newVals]);
  };

  function SavePhoneNumber() {
    if (firstPhoneNumber !== secondPhoneNumber) {
      ToastAndroid.show('شماره ها یکسان نیستند', ToastAndroid.SHORT);
      return;
    }

    if (selectNew !== null) {
      update(selectNew, firstPhoneNumber);
      setSelectNew(null);
      setFirstPhoneNumber('');
      setSecondPhoneNumber('');
    }
  }

  function rowComponent(i: number) {
    return (
      <>
        {values?.length === 10 && values[i] && (
          <View style={styles.middleItem}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Switch
                trackColor={{false: '#aaa', true: '#C1E1C1'}}
                thumbColor={
                  (values[i].sms === 1 ? true : false) ? '#2AAA8A' : '#f4f3f4'
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={val => toggleSwitchSms(i, val)}
                value={values[i].sms === 1 ? true : false}
              />
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Switch
                trackColor={{false: '#aaa', true: '#C1E1C1'}}
                thumbColor={
                  (values[i].call === 1 ? true : false) ? '#2AAA8A' : '#f4f3f4'
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={val => toggleSwitchCall(i, val)}
                value={values[i].call === 1 ? true : false}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
     
                <TouchableOpacity
                  onPress={() => {
                    setSelectNew(i);
                    setFirstPhoneNumber(String(values[i].value));
                    setSecondPhoneNumber(String(values[i].value));
                  }}>
                  <TextInput
                    editable={false}
                    style={styles.input}
                    placeholder="09123456789"
                    keyboardType={'phone-pad'}
                    maxLength={11}
                    value={String(values[i].value)}
                    onChangeText={(value: string) => update(i, value)}
                  />
                </TouchableOpacity>
   
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <>
                <TextInput
                  style={styles.item}
                  value={values[i].title}
                  onChangeText={value => updateTitle(i, value)}
                />
                <Image
                  source={require('../assets/icons/edit.png')}
                  style={commonStyles.icon12}
                />
              </>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Switch
                trackColor={{false: '#aaa', true: '#C1E1C1'}}
                thumbColor={
                  (values[i].state === 1 ? true : false) ? '#2AAA8A' : '#f4f3f4'
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={val => toggleSwitchState(i, val)}
                value={values[i].state === 1 ? true : false}
              />
            </View>
            <View style={{flex: 0.5, justifyContent: 'flex-end'}}>
              <Text style={[styles.item, {textAlign: 'center'}]}>1</Text>
            </View>
          </View>
        )}
      </>
    );
  }

  return (
    <View style={styles.container}>
      {selectNew !== null && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={selectNew === null ? false : true}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#00000099',
                height: 240,
                width: '80%',
                borderRadius: 25,
                padding: 25,
                elevation: 1,
                flexDirection: 'column',
                gap: 5,
              }}>
              <Text style={[commonStyles.text, {color: '#fff'}]}>
                شماره همراه
              </Text>
              <TextInput
                style={[styles.input, {backgroundColor: '#fff', fontSize: 15}]}
                keyboardType={'phone-pad'}
                maxLength={11}
                value={firstPhoneNumber}
                onChangeText={(value: string) => setFirstPhoneNumber(value)}
              />
              <Text style={[commonStyles.text, {color: '#fff'}]}>
                تکرار شماره همراه
              </Text>
              <TextInput
                style={[styles.input, {backgroundColor: '#fff', fontSize: 15}]}
                keyboardType={'phone-pad'}
                maxLength={11}
                value={secondPhoneNumber}
                onChangeText={(value: string) => setSecondPhoneNumber(value)}
              />
              <TouchableOpacity
                style={commonStyles.addButton}
                onPress={SavePhoneNumber}>
                <Text style={commonStyles.addButtonText}>تایید</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      <View style={styles.container_inner}>
        <View style={styles.top}>
          <Text style={styles.item}>پیامک</Text>
          <Text style={styles.item}>تماس</Text>
          <Text style={styles.item}>شماره تماس</Text>
          <Text style={styles.item}>نام</Text>
          <Text style={styles.item}>وضعیت</Text>
          <Text style={[styles.item]}>ردیف</Text>
        </View>
        <ScrollView contentContainerStyle={styles.middle}>
          {rowComponent(0)}
          {rowComponent(1)}
          {rowComponent(2)}
          {rowComponent(3)}
          {rowComponent(4)}
          {rowComponent(5)}
          {rowComponent(6)}
          {rowComponent(7)}
          {rowComponent(8)}
          {rowComponent(9)}
          {rowComponent(10)}
        </ScrollView>
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
    padding: 10,
  },
  input: {
    borderWidth: 1,
    minWidth: 60,
    borderColor: '#000',
    height: 35,
    borderRadius: 5,
    fontSize: 12,
    paddingBottom: 8,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  middle: {
    width: '100%',
    borderRadius: 5,
    flexDirection: 'column',
    padding: 5,
    gap: 10,
    paddingBottom: 25
  },
  item: {
    fontSize: 12,
    fontFamily: 'Samim',
    color: '#333',
  },
  middleItem: {
    backgroundColor: '#efefef',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default PNumbers;
