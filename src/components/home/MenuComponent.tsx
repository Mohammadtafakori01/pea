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
import {
  NavigationContainerProps,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {options} from '../../utils/globals';

interface INav {
  navigate: (route: string) => void;
}
const MenuComponent = ({onClose}: any) => {
  const navigation: INav = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.space}
        onPress={onClose}></TouchableOpacity>
      <View style={styles.menu}>
        <View style={styles.menu_top}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../../assets/logo.png')}
          />
        </View>

        <ScrollView contentContainerStyle={styles.menu_bottom}>
          <TouchableOpacity style={styles.item}>
            <Image
              source={require('../../assets/icons/add.png')}
              style={commonStyles.icon}
            />
            <Text style={[commonStyles.text, {fontSize: 15}]}>
              تنظیمات نرم افزار
            </Text>
          </TouchableOpacity>
          {options.device_id !== 0 && (
            <>
              {/* item */}
              {/* <TouchableOpacity style={styles.item}>
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={commonStyles.icon}
                />
                <Text style={[commonStyles.text, {fontSize: 15}]}>
                  تنظیمات محل نصب
                </Text>
              </TouchableOpacity> */}
              {/* item */}
              {/* item */}
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('DateTime');
                  onClose();
                }}>
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={commonStyles.icon}
                />
                <Text style={[commonStyles.text, {fontSize: 15}]}>
                  تنظیم تاریخ و زمان
                </Text>
              </TouchableOpacity>
              {/* item */}
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('Users');
                  onClose();
                }}>
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={commonStyles.icon}
                />
                <Text style={[commonStyles.text, {fontSize: 15}]}>
                  تنظیمات کاربرها
                </Text>
              </TouchableOpacity>
              {/* item */}
              {/* item */}
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('PNumbers');
                  onClose();
                }}>
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={commonStyles.icon}
                />
                <Text style={[commonStyles.text, {fontSize: 15}]}>
                  تنظیمات شماره ها
                </Text>
              </TouchableOpacity>
              {/* item */}
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('Zones');
                  onClose();
                }}>
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={commonStyles.icon}
                />
                <Text style={[commonStyles.text, {fontSize: 15}]}>
                  کنترل زون ها
                </Text>
              </TouchableOpacity>
              {/* item */}
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('Reports');
                  onClose();
                }}>
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={commonStyles.icon}
                />
                <Text style={[commonStyles.text, {fontSize: 15}]}>
                  تنظیمات گزارش ها
                </Text>
              </TouchableOpacity>
              {/* item */}
                {/* item */}
                <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('Alarms');
                  onClose();
                }}>
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={commonStyles.icon}
                />
                <Text style={[commonStyles.text, {fontSize: 15}]}>تنظیمات آژیر</Text>
              </TouchableOpacity>
              {/* item */}
              {/* item */}
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('Remotes');
                  onClose();
                }}>
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={commonStyles.icon}
                />
                <Text style={[commonStyles.text, {fontSize: 15}]}>تنظیمات ریموت</Text>
              </TouchableOpacity>
              {/* item */}
            
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('DingDong');
                  onClose();
                }}>
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={commonStyles.icon}
                />
                <Text style={[commonStyles.text, {fontSize: 15}]}>
                  تنظیمات دینگ دانگ
                </Text>
              </TouchableOpacity>
              {/* item */}
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('Chirps');
                  onClose();
                }}>
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={commonStyles.icon}
                />
                <Text style={[commonStyles.text, {fontSize: 15}]}>تنظیمات چیرپ</Text>
              </TouchableOpacity>
              {/* item */}
              {/* item */}
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('CallTypes');
                  onClose();
                }}>
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={commonStyles.icon}
                />
                <Text style={[commonStyles.text, {fontSize: 15}]}>تنظیمات نوع تماس</Text>
              </TouchableOpacity>
              {/* item */}

           
              {/* item */}
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  navigation.navigate('SimSettings');
                  onClose();
                }}>
                <Image
                  source={require('../../assets/icons/add.png')}
                  style={commonStyles.icon}
                />
                <Text style={[commonStyles.text, {fontSize: 15}]}>
                  تنظیمات سیم کارت{' '}
                </Text>
              </TouchableOpacity>
            </>
          )}
          {/* item */}

          {/* item */}
          <TouchableOpacity style={styles.item}>
            <Image
              source={require('../../assets/icons/add.png')}
              style={commonStyles.icon}
            />
            <Text style={[commonStyles.text, {fontSize: 15}]}>
              اشتراک گذاری نرم افزار
            </Text>
          </TouchableOpacity>
          {/* item */}
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate('AboutUs');
              onClose();
            }}>
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
            <Text style={[commonStyles.text, {fontSize: 15}]}>
              راهنمای تنظیمات
            </Text>
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
    padding: 8,
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
