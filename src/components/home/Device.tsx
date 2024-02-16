import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import IDevice from '../../interfaces/IDevice';
import {commonStyles} from '../../utils/commonStyles';
import {options} from '../../utils/globals';

function Device({item, title, navigation}: any) {
  return (
    <TouchableOpacity
      onPress={() => {
        options.device_id = item.id;
        navigation.navigate('Device', {item});
      }}
      style={commonStyles.deviceContainer}>
      <Text style={commonStyles.deviceTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
export default Device;
