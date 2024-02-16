// AboutUs.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>درباره ما</Text>
      <Text style={styles.description}>
        خوش آمدید! تعهد ما، ارائه بهترین تجربه و خدمات به شماست.
      </Text>
      <Text style={styles.description}>
        تیم ما به ایجاد راهکارهای نوآورانه علاقه‌مند است و از رضایت مشتریان غافل نمی‌شود.
      </Text>
      {/* Add more Persian content as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontFamily:"Samim"
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
    fontFamily:"Samim"
  },
  // Add more styles as needed
});

export default AboutUs;
