import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderColor: colors.gray,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 25,
    backgroundColor: colors.white,
    elevation: 2,
    aspectRatio: 1 / 1,
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
});
