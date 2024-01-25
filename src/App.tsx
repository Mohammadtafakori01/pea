import {
  NavigationContainer,
  NavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import Home from './screens/Home';
import {Alert, Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {commonStyles} from './utils/commonStyles';
import ConnectWay from './screens/ConnectWay';
import NotFound from './screens/NotFound';
import AddDevice from './screens/AddDevice';
import AboutUs from './screens/AboutUs';
import Device from './screens/Device';
const stack = createNativeStackNavigator();
import {NativeModules} from 'react-native';
import FullscreenComponent from './components/home/FullScreenComponent';
import MenuComponent from './components/home/MenuComponent';
// import Database from './utils/Database';
// import { PersonSchema } from './utils/PersonSchema';
// import { PersonSchemaa } from './utils/PersonSchemaa';

const {SmsModule} = NativeModules;

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

//   return (
//     <>
//       <Button title="ddd" onPress={() => SmsModule.checkSmsPermission()} />
//     </>
//   );
// }

type AppNavigatorParamList = {
  AboutUs: undefined;
};

function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const navigationRef =
    useRef<NavigationContainerRef<AppNavigatorParamList> | null>(null);

  useEffect(() => {
    SmsModule.checkSmsPermission();
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  });
  return (
    <>
      {isLoading ? (
        <FullscreenComponent />
      ) : (
        <NavigationContainer ref={navigationRef}>
          
          <stack.Navigator
            screenOptions={{
              headerTitleStyle: {
                fontFamily: 'Samim',
                fontSize: 18,
              },
            }}>
            <stack.Screen
              name="home"
              component={Home}
              options={{
                title: 'دستگاه های من',
                headerRight: () => (
                  <TouchableOpacity
                    onPress={toggleMenu}>
                    <View style={commonStyles.burger}>
                      <Image
                        style={commonStyles.icon}
                        source={require('./assets/icons/menu.png')}
                      />
                    </View>
                  </TouchableOpacity>
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
                    onPress={toggleMenu}>
                    <View style={commonStyles.burger}>
                      <Image
                        style={commonStyles.icon}
                        source={require('./assets/icons/menu.png')}
                      />
                    </View>
                  </TouchableOpacity>
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
                    onPress={toggleMenu}>
                    <View style={commonStyles.burger}>
                      <Image
                        style={commonStyles.icon}
                        source={require('./assets/icons/menu.png')}
                      />
                    </View>
                  </TouchableOpacity>
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
                    onPress={toggleMenu}>
                    <View style={commonStyles.burger}>
                      <Image
                        style={commonStyles.icon}
                        source={require('./assets/icons/menu.png')}
                      />
                    </View>
                  </TouchableOpacity>
                ),
              }}
            />

            <stack.Screen
              name="Device"
              component={Device}
              options={{
                title: 'مدیریت دستگاه',
                headerRight: () => (
                  <TouchableOpacity
                    onPress={toggleMenu}>
                    <View style={commonStyles.burger}>
                      <Image
                        style={commonStyles.icon}
                        source={require('./assets/icons/menu.png')}
                      />
                    </View>
                  </TouchableOpacity>
                ),
              }}
            />
          </stack.Navigator>
          {isMenuOpen && <MenuComponent onClose={toggleMenu} />}
        </NavigationContainer>
      )}
    </>
  );
}

export default App;
