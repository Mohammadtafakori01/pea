import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { commonStyles } from '../utils/commonStyles';


const ConnectWay = ({ navigation }: any) => {
  return (
    <View style={commonStyles.connectway_container}>
      {/* Button 1 */}
      <TouchableOpacity style={commonStyles.connectway_button} onPress={() => navigation.navigate("AddDevice")}>
        <Image source={require('../assets/icons/cellular.png')} style={commonStyles.connectway_icon} />
        <Text style={commonStyles.connectway_buttonText}>از طریق شبکه موبایل GSM</Text>
      </TouchableOpacity>
     

      {/* Button 2 */}
      <TouchableOpacity style={commonStyles.connectway_button} onPress={() => navigation.navigate("NotFound")}>
        <Image source={require('../assets/icons/network.png')} style={commonStyles.connectway_icon} />
        <Text style={commonStyles.connectway_buttonText}>از طریق شبکه</Text>
      </TouchableOpacity>

      {/* Button 3 */}
      <TouchableOpacity style={commonStyles.connectway_button} onPress={() => navigation.navigate("NotFound")}>
        <Image source={require('../assets/icons/scan.png')} style={commonStyles.connectway_icon} />
        <Text style={commonStyles.connectway_buttonText}>از طریق شماره سریال دستگاه</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ConnectWay;
