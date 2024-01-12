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
  useEffect(() => {
    const personDB = new Database([PersonSchemaa]);
    
 
    const allData = personDB.get(123);
    console.log(allData);
    personDB.closeRealm();
    
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
