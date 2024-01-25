import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FullscreenComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fullscreen}>
        <Text style={styles.centeredText}>Your Logo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8860B',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },
  fullscreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    color: '#FFFFFF', // White text color
    fontSize: 24,
    textAlign: 'center',
  },
});

export default FullscreenComponent;
