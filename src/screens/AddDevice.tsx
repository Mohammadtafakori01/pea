import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {commonStyles} from '../utils/commonStyles';
import Database from '../utils/Database';
import {DevicesSchema} from '../schemas/DeviceShema';
import IDevice from '../interfaces/IDevice';
import { DB } from '../utils/globals';

const AddDevice = ({navigation}: any) => {
  const [title, settitle] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  function arePasswordsEqual() {
    return password === confirmPassword;
  }

  const handleAddDevice = ({title, phonenumber, password}: IDevice) => {
    if(!arePasswordsEqual()) {
      ToastAndroid.show("رمز دستگاه و تکرار آن یکسان نیستند", ToastAndroid.LONG);
      return;
    }
   DB.insert(0, {title, phonenumber, password});
  
  ToastAndroid.show("دستگاه جدید با موفقیت ثبت شد", ToastAndroid.LONG);
  navigation.navigate("home")
  };

  return (
    <View style={commonStyles.add_dvc_container}>
      <View style={commonStyles.add_dvc_inputContainer}>
        <Text style={commonStyles.add_dvc_label}>نام دستگاه:</Text>
        <TextInput
          style={commonStyles.add_dvc_input}
          placeholder="نام دستگاه"
          value={title}
          onChangeText={text => settitle(text)}
        />
      </View>

      <View style={commonStyles.add_dvc_inputContainer}>
        <Text style={commonStyles.add_dvc_label}>شماره سیم کارت دستگاه:</Text>
        <TextInput
          style={commonStyles.add_dvc_input}
          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
          keyboardType={'phone-pad'}
          value={phonenumber}
          onChangeText={text => setphonenumber(String(text))}
        />
      </View>

      <View style={commonStyles.add_dvc_inputContainer}>
        <Text style={commonStyles.add_dvc_label}>رمز دستگاه:</Text>
        <TextInput
          style={commonStyles.add_dvc_input}
          keyboardType={'decimal-pad'}
          secureTextEntry
          value={password}
          onChangeText={text => setpassword(text)}
        />
      </View>

      <View style={commonStyles.add_dvc_inputContainer}>
        <Text style={commonStyles.add_dvc_label}>تکرار رمز دستگاه:</Text>
        <TextInput
          style={commonStyles.add_dvc_input}
          secureTextEntry
          value={confirmPassword}
          keyboardType={'decimal-pad'}
          onChangeText={text => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity
        style={commonStyles.add_dvc_button}
        onPress={() => handleAddDevice({id: 0, title, phonenumber, password})}>
        <Text style={commonStyles.add_dvc_buttonText}>اضافه کردن دستگاه</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddDevice;
