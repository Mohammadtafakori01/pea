import {ImageProps} from 'react-native';

export default interface ButtonProps {
  title: string;
  imageUrl: ImageProps;
  onPress: () => void;
};
