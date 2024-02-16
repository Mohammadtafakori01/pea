import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../utils/commonStyles';
import Devices from '../components/home/Devices';
import AddDevice from '../components/home/AddDevice';
import {titles} from '../utils/titles';
import {
  NavigationContainerRef,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import DatePicker from '@mohamadkh75/react-native-jalali-datepicker';

type AppNavigatorParamList = {
  Connectway: undefined;
};

function Home() {
  const isFocused = useIsFocused();
  const navigation =
    useNavigation<NavigationContainerRef<AppNavigatorParamList> | null>();

  return (
    <View style={commonStyles.home_container}>
    
      <Devices run={isFocused} navigation={navigation} />
      <AddDevice onPress={() => navigation?.navigate('Connectway')} />
      <Text style={{textAlign: 'center', padding: 5, fontSize: 12}}>
        {titles.version}
      </Text>
    </View>
  );
}

export default Home;
