import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { commonStyles } from '../utils/commonStyles';
import Search from '../components/home/Search';
import Devices from '../components/home/Devices';
import AddDevice from '../components/home/AddDevice';
import { titles } from '../utils/titles';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  return (
    <View style={commonStyles.home_container}>
        <Search />
        <Devices />
        <AddDevice onPress={() => navigation.navigate('Connectway')}/>
       
        <Text style={{textAlign: "center", padding: 5, fontSize: 12}}>
          {titles.version}
        </Text>
   
    </View>
  );
}


export default Home;
