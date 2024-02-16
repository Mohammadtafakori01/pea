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
  Modal,
} from 'react-native';
import {commonStyles} from '../utils/commonStyles';
import {DB, options} from '../utils/globals';

interface Item {
  value: string;
  title: string;
  state: number;
}

const Users = ({navigation}: any) => {
  const [users, setUsers] = useState<any>([]);
  const [values, setValues] = useState<Item[]>([]);
  const [selectNew, setSelectNew] = useState<null | number>(null);
  const [firstPhoneNumber, setFirstPhoneNumber] = useState<any>('');
  const [secondPhoneNumber, setSecondPhoneNumber] = useState<any>('');
  function getUsers() {
    const _users = DB.getAllByDeviceNumber(7, options.device_id);
    setTimeout(() => {
      setUsers(_users);
    }, 1000);
  }

  const toggleSwitch = (i: number, value: boolean) => {
    const vals = values;
    vals[i].state = value ? 1 : 0;
    setValues([...vals]);
  };

  function getState() {
    const states = DB.getAllByDeviceNumber(7, options.device_id);
    if (!states[0]) {
      DB.insert(7, {
        user_id: 1,
        value: '09121234567',
        title: 'User 01',
        device_id: options.device_id,
        state: 0,
      });
      DB.insert(7, {
        user_id: 2,
        value: '09121234567',
        title: 'User 02',
        device_id: options.device_id,
        state: 0,
      });
      DB.insert(7, {
        user_id: 3,
        value: '09121234567',
        title: 'User 03',
        device_id: options.device_id,
        state: 0,
      });
      DB.insert(7, {
        user_id: 4,
        value: '09121234567',
        title: 'User 04',
        device_id: options.device_id,
        state: 0,
      });
      getUsers();
    }
  }

  useEffect(() => {
    getState();
    getUsers();
  }, []);

  const update = (i: number, value: string) => {
    const newVals = values;
    newVals[i].value = value;
    setValues([...newVals]);
  };

  const save = () => {
    users.map((el: any, i: any) => {
      DB.update(7, el.id, {
        title: values[i].title,
        value: values[i].value,
        state: values[i].state,
      });
    });
    ToastAndroid.show('با موفقیت ذخیره شد', ToastAndroid.LONG);
  };

  useEffect(() => {
    if (users.length === 4) {
      let items: Item[] = [];
      users.map((el: any, i: any) => {
        items.push({value: el.value, state: el.state, title: el.title});
      });
      setValues([...items]);
    }
  }, [users]);

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
    console.log(selectNew);

    if (selectNew !== null) {
      update(selectNew, firstPhoneNumber);
      setSelectNew(null);
      setFirstPhoneNumber('');
      setSecondPhoneNumber('');
    }
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
          <Text style={styles.item}>فعال/غیرفعال</Text>
          <Text style={styles.item}>شماره تماس</Text>
          <Text style={styles.item}>کاربرها</Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.middleItem}>
            {values?.length === 4 && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Switch
                  trackColor={{false: '#767577', true: '#C1E1C1'}}
                  thumbColor={
                    (values[0].state === 1 ? true : false)
                      ? '#2AAA8A'
                      : '#f4f3f4'
                  }
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={val => toggleSwitch(0, val)}
                  value={values[0].state === 1 ? true : false}
                />
              </View>
            )}

            {values[0] && (
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => {
                  setSelectNew(0);
                  setFirstPhoneNumber(String(values[0].value));
                  setSecondPhoneNumber(String(values[0].value));
                }}>
                <TextInput
                  editable={false}
                  style={styles.input}
                  placeholder="09123456789"
                  keyboardType={'phone-pad'}
                  maxLength={11}
                  value={String(values[0].value)}
                  onChangeText={(value: string) => update(0, value)}
                />
              </TouchableOpacity>
            )}
            {values[0] && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <TextInput
                  style={styles.item}
                  value={values[0].title}
                  onChangeText={value => updateTitle(0, value)}
                />
                <Image
                  source={require('../assets/icons/edit.png')}
                  style={commonStyles.icon12}
                />
              </View>
            )}
          </View>
          <View style={styles.middleItem}>
            {values?.length === 4 && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Switch
                  trackColor={{false: '#767577', true: '#C1E1C1'}}
                  thumbColor={
                    (values[1].state === 1 ? true : false)
                      ? '#2AAA8A'
                      : '#f4f3f4'
                  }
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={val => toggleSwitch(1, val)}
                  value={values[1].state === 1 ? true : false}
                />
              </View>
            )}

            {values[1] && (
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => {
                  setSelectNew(1);
                  setFirstPhoneNumber(String(values[1].value));
                  setSecondPhoneNumber(String(values[1].value));
                }}>
                <TextInput
                  editable={false}
                  style={styles.input}
                  placeholder="09123456789"
                  keyboardType={'phone-pad'}
                  maxLength={11}
                  value={String(values[1].value)}
                  onChangeText={(value: string) => update(1, value)}
                />
              </TouchableOpacity>
            )}
            {values[1] && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <TextInput
                  style={styles.item}
                  value={values[1].title}
                  onChangeText={value => updateTitle(1, value)}
                />
                <Image
                  source={require('../assets/icons/edit.png')}
                  style={commonStyles.icon12}
                />
              </View>
            )}
          </View>

          <View style={styles.middleItem}>
            {values?.length === 4 && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Switch
                  trackColor={{false: '#767577', true: '#C1E1C1'}}
                  thumbColor={
                    (values[2].state === 1 ? true : false)
                      ? '#2AAA8A'
                      : '#f4f3f4'
                  }
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={val => toggleSwitch(2, val)}
                  value={values[2].state === 1 ? true : false}
                />
              </View>
            )}

            {values[2] && (
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => {
                  setSelectNew(2);
                  setFirstPhoneNumber(String(values[2].value));
                  setSecondPhoneNumber(String(values[2].value));
                }}>
                <TextInput
                  editable={false}
                  style={styles.input}
                  placeholder="09123456789"
                  keyboardType={'phone-pad'}
                  maxLength={11}
                  value={String(values[2].value)}
                  onChangeText={(value: string) => update(2, value)}
                />
              </TouchableOpacity>
            )}
            {values[2] && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <TextInput
                  style={styles.item}
                  value={values[2].title}
                  onChangeText={value => updateTitle(2, value)}
                />
                <Image
                  source={require('../assets/icons/edit.png')}
                  style={commonStyles.icon12}
                />
              </View>
            )}
          </View>

          <View style={styles.middleItem}>
            {values?.length === 4 && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Switch
                  trackColor={{false: '#767577', true: '#C1E1C1'}}
                  thumbColor={
                    (values[3].state === 1 ? true : false)
                      ? '#2AAA8A'
                      : '#f4f3f4'
                  }
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={val => toggleSwitch(3, val)}
                  value={values[3].state === 1 ? true : false}
                />
              </View>
            )}

            {values[3] && (
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => {
                  setSelectNew(3);
                  setFirstPhoneNumber(String(values[3].value));
                  setSecondPhoneNumber(String(values[3].value));
                }}>
                <TextInput
                  editable={false}
                  style={styles.input}
                  placeholder="09123456789"
                  keyboardType={'phone-pad'}
                  maxLength={11}
                  value={String(values[3].value)}
                  onChangeText={(value: string) => update(3, value)}
                />
              </TouchableOpacity>
            )}
            {values[3] && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <TextInput
                  style={styles.item}
                  value={values[3].title}
                  onChangeText={value => updateTitle(3, value)}
                />
                <Image
                  source={require('../assets/icons/edit.png')}
                  style={commonStyles.icon12}
                />
              </View>
            )}
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
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    height: 35,
    borderRadius: 5,
    paddingBottom: 8,
    textAlign: 'center',
    fontSize: 12,
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

export default Users;
