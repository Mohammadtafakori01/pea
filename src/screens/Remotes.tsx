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
  title: string;
  state: number;
}

const Remotes = ({navigation}: any) => {
  const [remotes, setRemotes] = useState<any>([]);
  const [values, setValues] = useState<Item[]>([]);
  function getRemotes() {
    const remotes = DB.getAllByDeviceNumber(10, options.device_id);
    setTimeout(() => {
      setRemotes(remotes);
    }, 1000);
  }

  const toggleSwitch = (i: number, value: boolean) => {
    const vals = values;
    vals[i].state = value ? 1 : 0;
    setValues([...vals]);
  };

  function getState() {
    const states = DB.getAllByDeviceNumber(10, options.device_id);
    if (!states[0]) {
      DB.insert(10, {
        remote_id: 1,
        title: 'ریموت ۰۱',
        device_id: options.device_id,
        state: 0,
      });
      DB.insert(10, {
        remote_id: 2,
        title: 'ریموت ۰۲',
        value: 'هیچ',
        device_id: options.device_id,
        state: 0,
      });
      getRemotes();
    }
  }

  useEffect(() => {
    getState();
    getRemotes();
  }, []);

  const updateTitle = (i: number, title: string) => {
    const newVals = values;
    newVals[i].title = title;
    setValues([...newVals]);
  };

  const save = () => {
    remotes.map((el: any, i: any) => {
      DB.update(10, el.id, {
        title: values[i].title,
        state: values[i].state,
      });
    });
    ToastAndroid.show('با موفقیت ذخیره شد', ToastAndroid.LONG);
  };

  useEffect(() => {
    if (remotes.length === 2) {
      let items: Item[] = [];
      remotes.map((el: any, i: any) => {
        items.push({state: el.state, title: el.title});
      });
      setValues([...items]);
    }
  }, [remotes]);

  function rowComponent(i: number) {
    return (
      <View style={styles.middleItem}>
        {values?.length === 2 && (
          <>
            <View style={{justifyContent: 'center', alignItems: 'flex-start', flex: 1}}>
              <Switch
                trackColor={{false: '#767577', true: '#C1E1C1'}}
                thumbColor={
                  (values[i].state === 1 ? true : false) ? '#2AAA8A' : '#f4f3f4'
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={val => toggleSwitch(i, val)}
                value={values[i].state === 1 ? true : false}
              />
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                style={styles.item}
                value={values[i].title}
                onChangeText={value => updateTitle(i, value)}
              />
              <Image
                source={require('../assets/icons/edit.png')}
                style={commonStyles.icon12}
              />
            </View>
            <View style={{flex: 0.5, justifyContent: 'flex-end'}}>
              <Text style={[styles.item, {textAlign: 'center'}]}>1</Text>
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
          {rowComponent(0)}
          {rowComponent(1)}
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

export default Remotes;
