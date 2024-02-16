import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  NativeModules,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {commonStyles} from '../utils/commonStyles';
import Events from '../components/home/Events';
import {DB} from '../utils/globals';

var moment = require('moment-jalaali');
interface State {
  id: number;
  value: string;
}
interface Log {
  id: number;
  string: string;
  date: string;
}
function Device({navigation}: any) {
  const {SmsModule} = NativeModules;
  const route = useRoute();
  const [state, setState] = useState<State | any>();
  const [logs, setLogs] = useState<Log[] | any[]>([]);
  const [lastSync, setLastSync] = useState(
    moment().format('jYYYY/jM/jD  HH:mm'),
  );
  const {item}: any = route.params;

  function getState() {
    const states = DB.getAll(1);
    if (!states[0]) DB.insert(1, {value: 'lock'});
    else setState(states[0]);
  }

  function insertLog(string: string) {
    const now = moment().format('jYYYY/jM/jD  HH:mm');
    DB.insert(2, {string, date: now});
    getLogs();
  }

  async function updateState(
    value: string,
    translate: string,
    command: string,
  ) {
    if (state) {
      DB.update(1, state.id, {value});
      const newState = DB.get(1, state.id);
      setState(newState);
      await SmsModule.sendSms(
        `*${item.password}*${item.phonenumber}*${command}#`,
        item.phonenumber,
      );
      ToastAndroid.show('وضعیت دستگاه تغییر کرد', ToastAndroid.SHORT);
      insertLog(`وضعیت دستگاه به ${translate}  تغییر کرد`);
    }
  }

  function getLogs() {
    const logs = DB.getAll(2);
    setLogs(logs.reverse());
  }

  useEffect(() => {
    navigation.setOptions({
      title: item.title,
    });
    getState();
    getLogs();
  }, []);

  const sync = () => {
    setLastSync(moment().format('jYYYY/jM/jD  HH:mm'));
    ToastAndroid.show('همگام سازی با سخت افزار...', ToastAndroid.SHORT);
  };

  return (
    <View style={commonStyles.main_parent}>
      <View style={commonStyles.main_1}>
        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
          <Text style={[commonStyles.text, {color: '#333'}]}>آخرین وضعیت</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1.5,
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: 20,
          }}>
          <View style={{flex: 1}}>
            <Text style={commonStyles.text}>{lastSync}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              flexDirection: 'row-reverse',
            }}>
            <TouchableOpacity style={[commonStyles.syncButton]} onPress={sync}>
              <Text
                style={[
                  commonStyles.addButtonText,
                  commonStyles.text,
                  {fontSize: 12, color: '#B8860B'},
                ]}>
                همگام سازی
              </Text>
              <Image
                source={require('../assets/icons/syncer.png')}
                style={commonStyles.icon12}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 4,
            gap: 5,
            justifyContent: 'space-around',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => updateState('lock', 'فعال', '1111')}
            style={[
              commonStyles.button_icon,
              {opacity: state?.value === 'lock' ? 1 : 0.4},
            ]}>
            <Image
              source={require('../assets/icons/lock.png')}
              style={commonStyles.iconImageHalf}
            />
            <Text style={[commonStyles.text, {color: '#333'}]}>فعال</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => updateState('athome', 'در خانه', '1112')}
            style={[
              commonStyles.button_icon,
              {opacity: state?.value === 'athome' ? 1 : 0.4},
            ]}>
            <Image
              source={require('../assets/icons/athome.png')}
              style={commonStyles.iconImageHalf}
            />
            <Text style={[commonStyles.text, {color: '#333'}]}>در خانه</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => updateState('unlock', 'غیرفعال', '1113')}
            style={[
              commonStyles.button_icon,
              {opacity: state?.value === 'unlock' ? 1 : 0.4},
            ]}>
            <Image
              source={require('../assets/icons/padlock.png')}
              style={commonStyles.iconImageHalf}
            />
            <Text style={[commonStyles.text, {color: '#333'}]}>غیرفعال</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={commonStyles.main_2}>
    
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            paddingTop: 8,
          }}>
          <Text style={[commonStyles.text, {color: '#333'}]}>وقایع</Text>
        </View>
        <View style={{flex: 6, marginHorizontal: 10}}>
          <FlatList
            data={logs}
            contentContainerStyle={{paddingBottom: 20}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Events text={item.string} date={item.date} />
            )}
          />
        </View>
      </View>
      <View style={commonStyles.main_3}>
        <TouchableOpacity style={[commonStyles.button_icon_black]}>
          <Image
            source={require('../assets/icons/shield.png')}
            style={commonStyles.iconImageHalf}
          />
          <Text style={[commonStyles.text, {color: '#333', fontSize: 12}]}>
            امنیت
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[commonStyles.button_icon_black]}
          onPress={() => navigation?.navigate('SmartHome', {item})}>
          <Image
            source={require('../assets/icons/light.png')}
            style={commonStyles.iconImageHalf}
          />
          <Text style={[commonStyles.text, {color: '#333', fontSize: 12}]}>
            خانه هوشمند
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyles.button_icon_black]}>
          <Image
            source={require('../assets/icons/video.png')}
            style={commonStyles.iconImageHalf}
          />
          <Text style={[commonStyles.text, {color: '#333', fontSize: 12}]}>
            ویدیو
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyles.button_icon_black]}>
          <Image
            source={require('../assets/icons/door.png')}
            style={commonStyles.iconImageHalf}
          />
          <Text style={[commonStyles.text, {color: '#333', fontSize: 12}]}>
            کنترل دسترسی
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Device;
