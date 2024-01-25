import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {commonStyles} from '../../utils/commonStyles';
import { useNavigation } from '@react-navigation/native';

const MenuComponent = ({onClose}: any) => {
    const naviagation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.space}
        onPress={onClose}></TouchableOpacity>

      <View style={styles.menu}>
        <View style={styles.menu_top}>
          <Text style={{color: '#fff'}}>Your Logo</Text>
        </View>
  
          <ScrollView contentContainerStyle={styles.menu_bottom}>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>تنظمات محل نصب</Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>تنظیمات نرم افزار</Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>شماره ها</Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>نام زون ها</Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>کنترل زون ها</Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>نام کاربرها</Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>تنظیمات  خروجی ها</Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>متن تحریک</Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>تنظیم زمان سنج</Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>تنظیمات پنل</Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>تنظیمات بیشتر </Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>اشتراک گذاری </Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item} onPress={() => naviagation.navigate('AboutUs')}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>درباره ما</Text>
            </TouchableOpacity>
            {/* item */}
            <TouchableOpacity style={styles.item}>
              <Image
                source={require('../../assets/icons/add.png')}
                style={commonStyles.icon}
              />
              <Text style={[commonStyles.text, {fontSize: 15}]}>راهنمای استفاده</Text>
            </TouchableOpacity>
          </ScrollView>
   
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#aaa',
    height: 40,
    padding: 10,
    borderRadius: 10,
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
    flex: 1,
    flexDirection: 'row',
    // Add any other styles you need
  },
  menu: {
    backgroundColor: '#fff',
    flex: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: -4, // Negative value creates a shadow to the left
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  space: {
    flex: 1,
  },
  menu_top: {
    height: 150,
    backgroundColor: '#B8860B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu_bottom: {
    padding: 20,
    paddingBottom: 100, // Add bottom padding to avoid cutting off the last items
    gap: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default MenuComponent;
