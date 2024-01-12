import React from 'react';
import Button from './Button';
import ButtonProps from '../../interfaces/Button';

const ButtonSMS: React.FC<ButtonProps> = ({title, imageUrl, onPress}) => {
  return <Button title={title} imageUrl={imageUrl} onPress={onPress}/>;
};

export default ButtonSMS;
