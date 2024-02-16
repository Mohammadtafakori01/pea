import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {commonStyles} from '../utils/commonStyles';
import {DB, options} from '../utils/globals';

function SimSettings({navigation}: any) {
  const [device, setDevice] = useState<any>();
  function getDevice() {
    const dvc = DB.get(0, options.device_id);
    setDevice(dvc);
  }
  useEffect(() => {
    getDevice();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.top}>
            <Text style={[commonStyles.text, {color: '#333', fontSize: 18}]}>
              شماره سیم کارت دستگاه
            </Text>
          </View>
          <View style={{width: '70%', flexDirection: 'column'}}>
            <Text style={commonStyles.add_dvc_input}>
              {device?.phonenumber}
            </Text>
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.top}>
            <Text style={[commonStyles.text, {color: '#333', fontSize: 18}]}>
              افزایش اعتبار سیم کارت دستگاه
            </Text>
          </View>
          <View style={{width: '70%', flexDirection: 'column', height: 120}}>
            <TextInput
              keyboardType={'decimal-pad'}
              style={commonStyles.add_dvc_input}
              placeholder="کد شارژ"
            />
            <TouchableOpacity
              style={[
                commonStyles.addButton,
                {
                  maxHeight: 40,
                  height: 40,
                  width: '50%',
                  marginHorizontal: '25%',
                },
              ]}>
              <Text style={commonStyles.addButtonText}>اجرا</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{justifyContent: 'center', alignItems: 'center', height: 120}}>
          <View style={styles.top}>
            <Text style={[commonStyles.text, {color: '#333', fontSize: 18}]}>
              دریافت موجودی اعتبار سیم کارت دستگاه
            </Text>
          </View>
          <View style={{width: '70%', flexDirection: 'column', height: 120}}>
            <TextInput
              keyboardType={'decimal-pad'}
              style={commonStyles.add_dvc_input}
              placeholder="کد دستوری"
              value="*110*10*1#"
            />
            <TouchableOpacity
              style={[
                commonStyles.addButton,
                {
                  maxHeight: 40,
                  height: 40,
                  width: '50%',
                  marginHorizontal: '25%',
                },
              ]}>
              <Text style={commonStyles.addButtonText}>اجرا</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '70%',
            flexDirection: 'column',
            height: 120,
            marginHorizontal: '15%',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('home');
              options.device_id = 0;
            }}
            style={[
              styles.ProButton,
              {
                maxHeight: 40,
                height: 40,
                width: '50%',
                marginHorizontal: '25%',
              },
            ]}>
            <Text style={commonStyles.addButtonText}>بازگشت</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
    justifyContent: 'flex-start',
    gap: 40,
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
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 25,
    padding: 10,
    marginBottom: 10,
  },
});

export default SimSettings;
