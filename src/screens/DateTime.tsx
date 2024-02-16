import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Switch,
  TextInput,
} from 'react-native';
import {commonStyles} from '../utils/commonStyles';
import {DB, options} from '../utils/globals';
import DateTimeCmp from '../components/home/DateTimeCmp';
const moment = require('moment-jalaali');
interface Item {
  value: number;
}
const DateTime = ({navigation}: any) => {
  const [DT, setDT] = useState<Item | any>();
  const [selectedDate, setSelectedDate] = useState('');
  const [newString, setNewString] = useState<number>();
  const [showCalendar, setshowCalendar] = useState(false);
  const [time, setTime] = useState({hour: '00', minute: '00'});

  const handleHourChange = (text: any) => {
    let hour = text;
    if (text.length === 2) {
      const num = parseInt(text);
      if (num > 24) {
        hour = '24';
      }
    }
    setTime({...time, hour});
  };

  const handleMinuteChange = (text: any) => {
    let minute = text;
    if (text.length === 2) {
      const num = parseInt(text);
      if (num > 59) {
        minute = '59';
      }
    }
    setTime({...time, minute});
  };

  function getDT() {
    const dt = DB.getAllByDeviceNumber(6, options.device_id);
    if(dt[0]){
    const date = new Date(Number(dt[0].value));
    setTime({
      hour: moment(date).format('HH'),
      minute: moment(date).format('mm'),
    });

    setSelectedDate(moment(date).format('jYYYY/jMM/jDD'));

    setTimeout(() => {
      setDT(dt);
    }, 1000);
  }
  }

  function getState() {
    const states = DB.getAllByDeviceNumber(6, options.device_id);
    if (!states[0]) {
      DB.insert(6, {
        device_id: options.device_id,
        value: 1710883800000,
      });
      getDT();
    }
  }

  useEffect(() => {
    getState();
    getDT();
  }, []);

  useEffect(() => {
   const newDateTime = new Date(moment(`${selectedDate} ${time.hour}:${time.minute}`, 'jYYYY/jM/jD HH:mm'));
   setNewString(newDateTime.getTime());
  }, [time, selectedDate]);

  const save = () => {
    DT.map((el: any, i: any) => {
      DB.update(6, el.id, {
        value: newString,
      });
    });
    ToastAndroid.show('با موفقیت ذخیره شد', ToastAndroid.LONG);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <View style={styles.middle}>
          <TouchableOpacity onPress={() => setshowCalendar(!showCalendar)}>
            <View style={[styles.middleItem, {position: 'relative'}]}>
              {showCalendar && (
                <DateTimeCmp
                  onclose={() => setshowCalendar(false)}
                  selected={selectedDate}
                  onchange={(val: any) => setSelectedDate(val)}
                />
              )}
              <Text style={[styles.item, {fontSize: 20}]}>{selectedDate}</Text>
              <Text style={styles.item}>تاریخ</Text>
            </View>
          </TouchableOpacity>

          <View
            style={[styles.middleItem, {position: 'relative', zIndex: -10}]}>
            <View style={styles.time_container}>
              <TextInput
                style={styles.time_input}
                keyboardType="numeric"
                onChangeText={handleHourChange}
                value={time.hour}
                maxLength={2}
              />
              <Text style={{fontSize: 30}}>:</Text>
              <TextInput
                style={styles.time_input}
                keyboardType="numeric"
                onChangeText={handleMinuteChange}
                value={time.minute}
                maxLength={2}
              />
            </View>
            <Text style={styles.item}>زمان</Text>
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
    position: 'relative',
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
  time_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time_input: {
    width: 50,
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 5,
    borderRadius: 10,
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

export default DateTime;
