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
import SmartHome from './screens/SmartHome';
import Zones from './screens/Zones';
import DingDong from './screens/DingDong';
import DateTime from './screens/DateTime';
import Users from './screens/Users';
import PNumbers from './screens/PNumbers';
import Reports from './screens/Report';
import SimSettings from './screens/SimSettings';
import Remotes from './screens/Remotes';
import Chirps from './screens/Chirps';
import CallTypes from './screens/CallTypes';
import Alarms from './screens/Alarms';
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
              name="Zones"
              component={Zones}
              options={{
                title: 'تنظیمات زون ها',
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
              name="DingDong"
              component={DingDong}
              options={{
                title: 'تنظیمات  دینگ دانگ',
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
              name="DateTime"
              component={DateTime}
              options={{
                title: 'تنظیمات   تاریخ و زمان',
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
              name="Reports"
              component={Reports}
              options={{
                title: 'تنظیمات گزارش به مدیران',
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
              name="SimSettings"
              component={SimSettings}
              options={{
                title: 'تنظیمات  سیم کارت ',
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
              name="Users"
              component={Users}
              options={{
                title: 'تنظیمات کاربرها ',
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
              name="PNumbers"
              component={PNumbers}
              options={{
                title: 'تنظیمات شماره ها ',
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
              name="Remotes"
              component={Remotes}
              options={{
                title: 'ریموت',
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
              name="Alarms"
              component={Alarms}
              options={{
                title: 'تنظیمات آژیر',
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
              name="Chirps"
              component={Alarms}
              options={{
                title: 'تنظیمات آژیر',
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
              name="CallTypes"
              component={CallTypes}
              options={{
                title: 'تنظیمات نوع تماس',
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


            <stack.Screen
              name="SmartHome"
              component={SmartHome}
              options={{
                title: 'خانه هوشمند',
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
