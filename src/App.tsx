import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import { Button} from 'react-native';
const stack = createNativeStackNavigator();
import {NativeModules} from 'react-native';
import Database from './utils/Database';
import { PersonSchema } from './utils/PersonSchema';
import { PersonSchemaa } from './utils/PersonSchemaa';

const {SmsModule} = NativeModules;


function HomeScreen() {

  const readLatestSmsByPhoneNumber = async (phoneNumber: string) => {
    try {
      // Request SMS permission if not granted
      await SmsModule.checkSmsPermission();
  
      // Read the latest SMS by phone number
      const smsList = await SmsModule.readSmsByPhoneNumber(phoneNumber);
      
      // Process the retrieved SMS list
      console.log('Latest SMS:', smsList); // Displaying the latest SMS body
    } catch (error) {
      console.error('Error reading SMS:', error.message);
    }
  };
  useEffect(() => {
    const targetPhoneNumber = '+989124105188'; // Replace with the desired phone number
readLatestSmsByPhoneNumber(targetPhoneNumber);
    
  });


  return (
    <>
      <Button title="ddd" onPress={() => SmsModule.checkSmsPermission()} />
    </>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="home" component={HomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
