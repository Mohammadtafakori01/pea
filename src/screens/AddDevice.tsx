import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { commonStyles } from '../utils/commonStyles';

const AddDevice = () => {
  const [deviceName, setDeviceName] = useState('');
  const [simNumber, setSimNumber] = useState('');
  const [devicePassword, setDevicePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAddDevice = () => {
    // Logic to handle adding the device
    console.log('Device added!');
  };

  return (
    <View style={commonStyles.add_dvc_container}>
    <View style={commonStyles.add_dvc_inputContainer}>
      <Text style={commonStyles.add_dvc_label}>نام دستگاه:</Text>
      <TextInput
        style={commonStyles.add_dvc_input}
        placeholder="نام دستگاه"
        value={deviceName}
        onChangeText={(text) => setDeviceName(text)}
      />
    </View>

    <View style={commonStyles.add_dvc_inputContainer}>
      <Text style={commonStyles.add_dvc_label}>شماره سیم کارت دستگاه:</Text>
      <TextInput
        style={commonStyles.add_dvc_input}
        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
        keyboardType={"phone-pad"}
        value={simNumber}
        onChangeText={(text) => setSimNumber(text)}
      />
    </View>

    <View style={commonStyles.add_dvc_inputContainer}>
      <Text style={commonStyles.add_dvc_label}>رمز دستگاه:</Text>
      <TextInput
        style={commonStyles.add_dvc_input}
        keyboardType={"decimal-pad"}
        secureTextEntry
        value={devicePassword}
        onChangeText={(text) => setDevicePassword(text)}
      />
    </View>

    <View style={commonStyles.add_dvc_inputContainer}>
      <Text style={commonStyles.add_dvc_label}>تکرار رمز دستگاه:</Text>
      <TextInput
        style={commonStyles.add_dvc_input}
        secureTextEntry
        value={confirmPassword}
        keyboardType={"decimal-pad"}
        onChangeText={(text) => setConfirmPassword(text)}
      />
    </View>

    <TouchableOpacity style={commonStyles.add_dvc_button} onPress={handleAddDevice}>
      <Text style={commonStyles.add_dvc_buttonText}>اضافه کردن دستگاه</Text>
    </TouchableOpacity>
  </View>
  );
};



export default AddDevice;
