import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Switch,
} from 'react-native';
import {commonStyles} from '../utils/commonStyles';
import {useRoute} from '@react-navigation/native';
import {DB, options} from '../utils/globals';

interface Item {
  value: string;
  title: string;
  light: number;
  state: number;
}
const SmartHome = ({navigation}: any) => {
  const [reles, setReles] = useState<any>([]);
  const [values, setValues] = useState<Item[]>([]);
  const route = useRoute();
  const {item}: any = route.params;
  function getReles() {
    const reles = DB.getAllByDeviceNumber(3, item.id);

    setReles(reles);
  }

  function getState() {
    const states = DB.getAllByDeviceNumber(3, item.id);
    if (!states[0]) {
      DB.insert(3, {
        rele_id: 1,
        value: 0,
        device_id: item.id,
        state: 0,
        light: 0,
        title: 'رله ۰۱',
      });
      DB.insert(3, {
        rele_id: 2,
        value: 0,
        device_id: item.id,
        state: 0,
        light: 0,
        title: 'رله ۰۲',
      });
      DB.insert(3, {
        rele_id: 3,
        value: 0,
        device_id: item.id,
        state: 0,
        light: 0,
        title: 'رله ۰۳',
      });
      DB.insert(3, {
        rele_id: 4,
        value: 0,
        device_id: item.id,
        state: 0,
        light: 0,
        title: 'رله ۰۴',
      });
      getReles();
    }
  }

  useEffect(() => {
    getState();
    getReles();
  }, []);

  const update = (i: number, value: string) => {
    const newVals = values;
    newVals[i].value = value;

    setValues([...newVals]);
  };

  const save = () => {
    reles.map((el: any, i: any) => {
      DB.update(3, el.id, {
        value: Number(values[i].value),
        light: values[i].light,
        state: values[i].state,
        title: values[i].title,
      });
    });
    ToastAndroid.show('با موفقیت ذخیره شد', ToastAndroid.LONG);
  };

  useEffect(() => {
    if (reles.length === 4) {
      let items: Item[] = [];
      reles.map((el: any, i: any) => {
        items.push({
          value: String(el.value),
          light: el.light,
          state: el.state,
          title: el.title,
        });
      });
      setValues([...items]);
    }
  }, [reles]);

  const toggleSwitch = (i: number, value: boolean) => {
    const vals = values;

    vals[i].state = value ? 1 : 0;
    setValues([...vals]);
  };

  const toggleSwitchLight = (i: number, value: boolean) => {
    const vals = values;

    vals[i].light = value ? 1 : 0;
    setValues([...vals]);
  };

  const updateTitle = (i: number, title: string) => {
    const newVals = values;
    newVals[i].title = title;
    setValues([...newVals]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <View style={styles.top}>
          <Text style={[styles.item, {fontSize: 12}]}>روشن/خاموش</Text>
          <Text style={[styles.item, {fontSize: 12}]}>برنامه زمانبندی</Text>
          <Text style={[styles.item, {fontSize: 12}]}>وضعیت رله</Text>
          <Text style={[styles.item, {fontSize: 12}]}>نام رله خروجی</Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.middleItem}>
            <View style={{flex: 1}}>
              {values[0] && (
                <TouchableOpacity
                  disabled={values[0].state !== 1}
                  onPress={() =>
                    toggleSwitchLight(0, values[0].light === 1 ? false : true)
                  }>
                  {values[0].light == 1 ? (
                    <Image
                      source={require('../assets/icons/lampon.png')}
                      style={commonStyles.icon}
                    />
                  ) : (
                    <Image
                      source={require('../assets/icons/lamp.png')}
                      style={commonStyles.icon}
                    />
                  )}
                </TouchableOpacity>
              )}
            </View>
            {values?.length === 4 && (
              <View style={{flex: 1}}>
                <TextInput
                  keyboardType={'number-pad'}
                  style={styles.input}
                  placeholder="0"
                  onChangeText={value => update(0, String(value))}
                  value={values[0].value}
                />
              </View>
            )}
            {values[0] && (
              <View style={{flex: 1}}>
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
              <View
                style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
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
            <View style={{flex: 1}}>
              {values[1] && (
                <TouchableOpacity
                  disabled={values[1].state !== 1}
                  onPress={() =>
                    toggleSwitchLight(1, values[1].light === 1 ? false : true)
                  }>
                  {values[1].light == 1 ? (
                    <Image
                      source={require('../assets/icons/lampon.png')}
                      style={commonStyles.icon}
                    />
                  ) : (
                    <Image
                      source={require('../assets/icons/lamp.png')}
                      style={commonStyles.icon}
                    />
                  )}
                </TouchableOpacity>
              )}
            </View>
            {values?.length === 4 && (
              <View style={{flex: 1}}>
                <TextInput
                  keyboardType={'number-pad'}
                  style={styles.input}
                  placeholder="0"
                  onChangeText={value => update(1, String(value))}
                  value={values[1].value}
                />
              </View>
            )}
            {values[1] && (
              <View style={{flex: 1}}>
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
              <View
                style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
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
            <View style={{flex: 1}}>
              {values[2] && (
                <TouchableOpacity
                  disabled={values[2].state !== 1}
                  onPress={() =>
                    toggleSwitchLight(2, values[2].light === 1 ? false : true)
                  }>
                  {values[2].light == 1 ? (
                    <Image
                      source={require('../assets/icons/lampon.png')}
                      style={commonStyles.icon}
                    />
                  ) : (
                    <Image
                      source={require('../assets/icons/lamp.png')}
                      style={commonStyles.icon}
                    />
                  )}
                </TouchableOpacity>
              )}
            </View>
            {values?.length === 4 && (
              <View style={{flex: 1}}>
                <TextInput
                  keyboardType={'number-pad'}
                  style={styles.input}
                  placeholder="0"
                  onChangeText={value => update(2, String(value))}
                  value={values[2].value}
                />
              </View>
            )}
            {values[2] && (
              <View style={{flex: 1}}>
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
              <View
                style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
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
            <View style={{flex: 1}}>
              {values[3] && (
                <TouchableOpacity
                  disabled={values[3].state !== 1}
                  onPress={() =>
                    toggleSwitchLight(3, values[3].light === 1 ? false : true)
                  }>
                  {values[3].light == 1 ? (
                    <Image
                      source={require('../assets/icons/lampon.png')}
                      style={commonStyles.icon}
                    />
                  ) : (
                    <Image
                      source={require('../assets/icons/lamp.png')}
                      style={commonStyles.icon}
                    />
                  )}
                </TouchableOpacity>
              )}
            </View>
            {values?.length === 4 && (
              <View style={{flex: 1}}>
                <TextInput
                  keyboardType={'number-pad'}
                  style={styles.input}
                  placeholder="0"
                  onChangeText={value => update(1, String(value))}
                  value={values[1].value}
                />
              </View>
            )}
            {values[3] && (
              <View style={{flex: 1}}>
                <Switch
                  trackColor={{false: '#767577', true: '#C1E1C1'}}
                  thumbColor={
                    (values[1].state === 1 ? true : false)
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
              <View
                style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
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
                navigation.navigate('Device', {item});
                options.device_id = 0;
              }}>
              <Text style={commonStyles.addButtonText}>لغو</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 30}}>
            <TouchableOpacity
              style={[styles.ProButton]}
              onPress={() => navigation.navigate('Device', {item})}>
              <Text style={commonStyles.addButtonText}>سناریو</Text>
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
    gap: 10,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    minWidth: 40,
    borderColor: '#000',
    height: 35,
    borderRadius: 5,
    paddingBottom: 10,
    textAlign: 'center',
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

export default SmartHome;
