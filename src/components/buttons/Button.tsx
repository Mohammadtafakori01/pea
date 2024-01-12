import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {commonStyles} from '../../utils/commonStyles';
import ButtonProps from '../../interfaces/Button';

const Button: React.FC<ButtonProps> = ({title, imageUrl, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={commonStyles.button}>
        <Image source={imageUrl} style={commonStyles.iconImage}/>
      </View>
        <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
