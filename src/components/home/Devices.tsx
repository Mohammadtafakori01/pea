import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import Device from './Device';
import IDevice from '../../interfaces/IDevice';
import Database from '../../utils/Database';
import {DevicesSchema} from '../../schemas/DeviceShema';
import Search from './Search';
import { DB } from '../../utils/globals';

function Devices({ navigation, run }: any) {
  const [devices, setDevices] = useState<IDevice[]>([]);

 

  function getDevices() {
    const dvs = DB.getAll(0);
    setDevices(dvs.reverse());
  }

  useEffect(() => {
    getDevices();
    
    return () => {
    };
  }, [run]);


  return (
    <>
      <Search
        getDevices={getDevices}
        setDevices={(devices: IDevice[]) => setDevices(devices)}
        devices={devices}
      />
      <View
        style={{
          flexGrow: 1,
          width: '80%',
          marginHorizontal: '10%',
          paddingBottom: 100,
        }}>
        {/* Display the filtered devices using FlatList */}
        <FlatList
          data={devices}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom: 100}}
          renderItem={({item}: {item: IDevice}) => (
            <Device title={item.title} item={item} navigation={navigation} />
          )}
        />
      </View>
    </>
  );
}

export default Devices;
