import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>صفحه یافت نشد!</Text>
      <Text style={styles.subText}>
        این آپشن در دست ساخت است و به زودی به اپلیکیشن اضافه می گردد
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    margin: '10%',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'Samim',
    color: 'purple',
  },
  subText: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Samim',
    textAlign: 'center',
  },
});

export default NotFound;
