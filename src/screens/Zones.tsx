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
const items = [
  'بیرون رفتن',
  'در خانه',
  'دستکاری',
  'حریق',
  'با تاخیر',
  'هشدار اضطرار',
  'هشدار اضطرار بی صدا',
  'هیچ',
];
interface Item {
  title: string;
  value: string;
  state: number;
}

const Zones = ({navigation}: any) => {
  const [zones, setZones] = useState<any>([]);
  const [values, setValues] = useState<Item[]>([]);
  function getZones() {
    const Zones = DB.getAllByDeviceNumber(4, options.device_id);
    setTimeout(() => {
      setZones(Zones);
    }, 1000);
  }

  const toggleSwitch = (i: number, value: boolean) => {
    const vals = values;
    console.log(value);

    vals[i].state = value ? 1 : 0;
    setValues([...vals]);
  };

  function getState() {
    const states = DB.getAllByDeviceNumber(4, options.device_id);
    if (!states[0]) {
      DB.insert(4, {
        zone_id: 1,
        title: 'زون ۰۱',
        value: 'هیچ',
        device_id: options.device_id,
        state: 0,
      });
      DB.insert(4, {
        zone_id: 2,
        title: 'زون ۰۲',
        value: 'هیچ',
        device_id: options.device_id,
        state: 0,
      });
      DB.insert(4, {
        zone_id: 3,
        title: 'زون ۰۳',
        value: 'هیچ',
        device_id: options.device_id,
        state: 0,
      });
      DB.insert(4, {
        zone_id: 4,
        title: 'زون ۰۴',
        value: 'هیچ',
        device_id: options.device_id,
        state: 0,
      });
      getZones();
    }
  }

  useEffect(() => {
    getState();
    getZones();
  }, []);

  const update = (i: number, value: string) => {
    const newVals = values;
    newVals[i].value = value;
    setValues([...newVals]);
  };

  const updateTitle = (i: number, title: string) => {
    const newVals = values;
    newVals[i].title = title;
    setValues([...newVals]);
  };

  const save = () => {
    zones.map((el: any, i: any) => {
      DB.update(4, el.id, {
        title: values[i].title,
        value: values[i].value,
        state: values[i].state,
      });
    });
    ToastAndroid.show('با موفقیت ذخیره شد', ToastAndroid.LONG);
  };

  useEffect(() => {
    if (zones.length === 4) {
      let items: Item[] = [];
      zones.map((el: any, i: any) => {
        items.push({value: el.value, state: el.state, title: el.title});
      });
      setValues([...items]);
    }
  }, [zones]);

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <View style={styles.top}>
          <Text style={styles.item}>فعال/غیرفعال</Text>
          <Text style={styles.item}>برنامه زمانبندی</Text>
          <Text style={styles.item}>نام زون خروجی</Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.middleItem}>
            {values?.length === 4 && (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
                {values?.length === 4 && (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <SelectDropdown
                      rowTextStyle={commonStyles.text}
                      buttonStyle={{
                        width: '70%',
                        height: '80%',
                        borderRadius: 10,
                        borderWidth: 1,
                      }}
                      dropdownStyle={{width: '50%', left: '25%'}}
                      buttonTextStyle={[commonStyles.text, {fontSize: 12}]}
                      data={items}
                      onSelect={(selectedItem, index) => {
                        update(0, selectedItem);
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem;
                      }}
                      defaultValue={values[0].value}
                      rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item;
                      }}
                    />
                  </View>
                )}
                <>
                  <TextInput
                    style={styles.item}
                    value={values[0].title}
                    onChangeText={value => updateTitle(0, value)}
                  />
                  <Image
                    source={require('../assets/icons/edit.png')}
                    style={commonStyles.icon12}
                  />
                </>
              </>
            )}
          </View>

          <View style={styles.middleItem}>
            {values?.length === 4 && (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
                {values?.length === 4 && (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <SelectDropdown
                      rowTextStyle={commonStyles.text}
                      buttonStyle={{
                        width: '70%',
                        height: '80%',
                        borderRadius: 10,
                        borderWidth: 1,
                      }}
                      dropdownStyle={{width: '50%', left: '25%'}}
                      buttonTextStyle={[commonStyles.text, {fontSize: 12}]}
                      data={items}
                      onSelect={(selectedItem, index) => {
                        update(1, selectedItem);
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem;
                      }}
                      defaultValue={values[1].value}
                      rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item;
                      }}
                    />
                  </View>
                )}
                <>
                  <TextInput
                    style={styles.item}
                    value={values[1].title}
                    onChangeText={value => updateTitle(1, value)}
                  />
                  <Image
                    source={require('../assets/icons/edit.png')}
                    style={commonStyles.icon12}
                  />
                </>
              </>
            )}
          </View>

          <View style={styles.middleItem}>
            {values?.length === 4 && (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
                {values?.length === 4 && (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <SelectDropdown
                      rowTextStyle={commonStyles.text}
                      buttonStyle={{
                        width: '70%',
                        height: '80%',
                        borderRadius: 10,
                        borderWidth: 1,
                      }}
                      dropdownStyle={{width: '50%', left: '25%'}}
                      buttonTextStyle={[commonStyles.text, {fontSize: 12}]}
                      data={items}
                      onSelect={(selectedItem, index) => {
                        update(2, selectedItem);
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem;
                      }}
                      defaultValue={values[2].value}
                      rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item;
                      }}
                    />
                  </View>
                )}
                <>
                  <TextInput
                    style={styles.item}
                    value={values[2].title}
                    onChangeText={value => updateTitle(2, value)}
                  />
                  <Image
                    source={require('../assets/icons/edit.png')}
                    style={commonStyles.icon12}
                  />
                </>
              </>
            )}
          </View>

          <View style={styles.middleItem}>
            {values?.length === 4 && (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
                {values?.length === 4 && (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <SelectDropdown
                      rowTextStyle={commonStyles.text}
                      buttonStyle={{
                        width: '70%',
                        height: '80%',
                        borderRadius: 10,
                        borderWidth: 1,
                      }}
                      dropdownStyle={{width: '50%', left: '25%'}}
                      buttonTextStyle={[commonStyles.text, {fontSize: 12}]}
                      data={items}
                      onSelect={(selectedItem, index) => {
                        update(3, selectedItem);
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem;
                      }}
                      defaultValue={values[3].value}
                      rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item;
                      }}
                    />
                  </View>
                )}
                <>
                  <TextInput
                    style={styles.item}
                    value={values[3].title}
                    onChangeText={value => updateTitle(3, value)}
                  />
                  <Image
                    source={require('../assets/icons/edit.png')}
                    style={commonStyles.icon12}
                  />
                </>
              </>
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
    justifyContent: 'flex-end',
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

export default Zones;
