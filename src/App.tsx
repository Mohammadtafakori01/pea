import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useRef } from 'react';
import Home from './screens/Home';
import {Alert, Button, Image, Text, TouchableOpacity, View} from 'react-native';
import { commonStyles } from './utils/commonStyles';
import ConnectWay from './screens/ConnectWay';
import NotFound from './screens/NotFound';
import AddDevice from './screens/AddDevice';
import AboutUs from './screens/AboutUs';
const stack = createNativeStackNavigator();
// import {NativeModules} from 'react-native';
// import Database from './utils/Database';
// import { PersonSchema } from './utils/PersonSchema';
// import { PersonSchemaa } from './utils/PersonSchemaa';

// const {SmsModule} = NativeModules;

// function HomeScreen() {

//   const readLatestSmsByPhoneNumber = async (phoneNumber: string) => {
//     try {
//       // Request SMS permission if not granted
//       await SmsModule.checkSmsPermission();

//       // Read the latest SMS by phone number
//       const smsList = await SmsModule.readSmsByPhoneNumber(phoneNumber);

//       // Process the retrieved SMS list
//       console.log('Latest SMS:', smsList); // Displaying the latest SMS body
//     } catch (error) {
//       console.error('Error reading SMS:', error.message);
//     }
//   };
//   useEffect(() => {
//     const targetPhoneNumber = '+989124105188'; // Replace with the desired phone number
// readLatestSmsByPhoneNumber(targetPhoneNumber);

//   });

//   return (
//     <>
//       <Button title="ddd" onPress={() => SmsModule.checkSmsPermission()} />
//     </>
//   );
// }



function App(): React.JSX.Element {
  const navigationRef = useRef(null);
  return (
    <NavigationContainer  ref={navigationRef}>
      <stack.Navigator>

        <stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'دستگاه های من',
            headerRight: () => (
              <TouchableOpacity
              onPress={() => {
       
                navigationRef.current?.navigate('AboutUs');
              
              }}
              ><View style={commonStyles.burger}><Image
              style={commonStyles.icon}
              source={require('./assets/icons/menu.png')}
            /></View></TouchableOpacity>
            ),
          }}
        />
              <stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            title: 'درباره ما',
          }}
        />

        <stack.Screen
          name="Connectway"
          component={ConnectWay}
          options={{
            title: 'نوع ارتباط با پنل',
            headerRight: () => (
              <TouchableOpacity
              onPress={() => {
                navigationRef.current?.navigate('AboutUs');
              }}
              ><View style={commonStyles.burger}><Image
              style={commonStyles.icon}
              source={require('./assets/icons/menu.png')}
            /></View></TouchableOpacity>
            ),
          }}
        />
        <stack.Screen
          name="NotFound"
          component={NotFound}
          options={{
            title: 'در دست ساخت',
            headerRight: () => (
              <TouchableOpacity
              onPress={() => {
                navigationRef.current?.navigate('AboutUs');
              }}
              ><View style={commonStyles.burger}><Image
              style={commonStyles.icon}
              source={require('./assets/icons/menu.png')}
            /></View></TouchableOpacity>
            ),
          }}
        />
        <stack.Screen
          name="AddDevice"
          component={AddDevice}
          options={{
            title: 'افزودن دستگاه از طریق GSM',
            headerRight: () => (
              <TouchableOpacity
              onPress={() => {
                navigationRef.current?.navigate('AboutUs');
              }}
              ><View style={commonStyles.burger}><Image
              style={commonStyles.icon}
              source={require('./assets/icons/menu.png')}
            /></View></TouchableOpacity>
            ),
          }}
        />
    
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
