import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Switch,
  TextInput,
  ScrollView,
} from 'react-native';
import {commonStyles} from '../utils/commonStyles';
import {DB, options} from '../utils/globals';

interface Item {
  value: number[];
}
const Reports = ({navigation}: any) => {
  const [reports, setReports] = useState<any>([]);
  const [values, setValues] = useState<Item[]>([]);
  function getReports() {
    const _Reports = DB.getAllByDeviceNumber(9, options.device_id);


    setTimeout(() => {
      setReports(_Reports);
    }, 1000);
  }

  function getState() {
    const states = DB.getAllByDeviceNumber(9, options.device_id);

    if (!states[0]) {
      DB.insert(9, {
        report_id: 1,
        value: JSON.stringify([1, 2]),
        device_id: options.device_id,
      });
      DB.insert(9, {
        report_id: 2,
        value: JSON.stringify([1, 2]),
        device_id: options.device_id,
      });
      DB.insert(9, {
        report_id: 3,
        value: JSON.stringify([1, 2]),
        device_id: options.device_id,
      });
      DB.insert(9, {
        report_id: 4,
        value: JSON.stringify([1, 2]),
        device_id: options.device_id,
      });
      DB.insert(9, {
        report_id: 5,
        value: JSON.stringify([1, 2]),
        device_id: options.device_id,
      });
      DB.insert(9, {
        report_id: 6,
        value: JSON.stringify([1, 2]),
        device_id: options.device_id,
      });
      DB.insert(9, {
        report_id: 7,
        value: JSON.stringify([1, 2]),
        device_id: options.device_id,
      });
      DB.insert(9, {
        report_id: 8,
        value: JSON.stringify([1, 2]),
        device_id: options.device_id,
      });
      DB.insert(9, {
        report_id: 9,
        value: JSON.stringify([1, 2]),
        device_id: options.device_id,
      });
      DB.insert(9, {
        report_id: 10,
        value: JSON.stringify([1, 2]),
        device_id: options.device_id,
      });
      DB.insert(9, {
        report_id: 11,
        value: JSON.stringify([1, 2]),
        device_id: options.device_id,
      });
      getReports();
    }
  }

  useEffect(() => {
    getState();
    getReports();
  }, []);

  const update = (i: number, value: number) => {
    // Create a copy of the values array
    const newVals = [...values];

    // Find the index of the value in the array at index i
    const indexToRemove = newVals[i].value.indexOf(value);

    // If the value exists, remove it
    if (indexToRemove !== -1) {
      newVals[i].value.splice(indexToRemove, 1);
    } else {
      // If the value doesn't exist, add it
      newVals[i].value.push(value);
    }

    // Update the state with the modified array
    setValues(newVals);
  };

  const save = () => {
    reports.map((el: any, i: any) => {
      DB.update(9, el.id, {
        value: JSON.stringify(values[i].value),
      });
    });
    ToastAndroid.show('با موفقیت ذخیره شد', ToastAndroid.LONG);
  };

  useEffect(() => {
    if (reports.length === 11) {
      let items: Item[] = [];
      reports.map((el: any, i: any) => {
        items.push({value: JSON.parse(el.value)});
      });

      setValues([...items]);
    }
  }, [reports]);

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <View style={styles.top}>
          <Text style={[styles.item, {fontSize: 15}]}>انتخاب مدیران</Text>
          <Text style={[styles.item, {fontSize: 15}]}>نوع گزارش</Text>
        </View>
        <ScrollView contentContainerStyle={styles.middle}>
          <View style={styles.middleItem}>
            {values?.length === 11 && (
              <View style={styles.four_container}>
                <TouchableOpacity
                  onPress={() => update(0, 1)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[0].value.includes(1)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(0, 2)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[0].value.includes(2)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(0, 3)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[0].value.includes(3)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(0, 4)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[0].value.includes(4)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>4</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.item}>تماس هشدار</Text>
          </View>

          <View style={styles.middleItem}>
          {values?.length === 11 && (
              <View style={styles.four_container}>
                <TouchableOpacity
                  onPress={() => update(1, 1)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[1].value.includes(1)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(1, 2)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[1].value.includes(2)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(1, 3)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[1].value.includes(3)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(1, 4)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[1].value.includes(4)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>4</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.item}>پیامک هشدار</Text>
          </View>

          <View style={styles.middleItem}>
          {values?.length === 11 && (
              <View style={styles.four_container}>
                <TouchableOpacity
                  onPress={() => update(2, 1)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[2].value.includes(1)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(2, 2)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[2].value.includes(2)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(2, 3)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[2].value.includes(3)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(2, 4)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[2].value.includes(4)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>4</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.item}>هشدار برق و باتری</Text>
          </View>

          <View style={styles.middleItem}>
          {values?.length === 11 && (
              <View style={styles.four_container}>
                <TouchableOpacity
                  onPress={() => update(3, 1)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[3].value.includes(1)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(3, 2)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[3].value.includes(2)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(3, 3)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[3].value.includes(3)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(3, 4)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[3].value.includes(4)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>4</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.item}>تغییر وضعیت پنل</Text>
          </View>

          <View style={styles.middleItem}>
          {values?.length === 11 && (
              <View style={styles.four_container}>
                <TouchableOpacity
                  onPress={() => update(4, 1)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[4].value.includes(1)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(4, 2)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[4].value.includes(2)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(4, 3)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[4].value.includes(3)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(4, 4)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[4].value.includes(4)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>4</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.item}>تغییر وضعیت با ریموت</Text>
          </View>

          <View style={styles.middleItem}>
          {values?.length === 11 && (
              <View style={styles.four_container}>
                <TouchableOpacity
                  onPress={() => update(5, 1)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[5].value.includes(1)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(5, 2)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[5].value.includes(2)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(5, 3)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[5].value.includes(3)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(5, 4)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[5].value.includes(4)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>4</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.item}>تغییر تنظیمات سیستم</Text>
          </View>

          <View style={styles.middleItem}>
          {values?.length === 11 && (
              <View style={styles.four_container}>
                <TouchableOpacity
                  onPress={() => update(6, 1)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[6].value.includes(1)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(6, 2)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[6].value.includes(2)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(6, 3)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[6].value.includes(3)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(6, 4)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[6].value.includes(4)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>4</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.item}>قطع شدن فیوزها</Text>
          </View>

          <View style={styles.middleItem}>
          {values?.length === 11 && (
              <View style={styles.four_container}>
                <TouchableOpacity
                  onPress={() => update(7, 1)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[7].value.includes(1)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(7, 2)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[7].value.includes(2)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(7, 3)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[7].value.includes(3)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(7, 4)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[7].value.includes(4)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>4</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.item}>قطع شدن خط تلفن</Text>
          </View>

          <View style={styles.middleItem}>
          {values?.length === 11 && (
              <View style={styles.four_container}>
                <TouchableOpacity
                  onPress={() => update(8, 1)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[8].value.includes(1)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(8, 2)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[8].value.includes(2)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(8, 3)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[8].value.includes(3)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(8, 4)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[8].value.includes(4)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>4</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.item}>اعتبار سیم کارت</Text>
          </View>

          <View style={styles.middleItem}>
          {values?.length === 11 && (
              <View style={styles.four_container}>
                <TouchableOpacity
                  onPress={() => update(9, 1)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[9].value.includes(1)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(9, 2)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[9].value.includes(2)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(9, 3)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[9].value.includes(3)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(9, 4)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[9].value.includes(4)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>4</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.item}>وضعیت باتری سنسور بیسیم</Text>
          </View>

          <View style={styles.middleItem}>
          {values?.length === 11 && (
              <View style={styles.four_container}>
                <TouchableOpacity
                  onPress={() => update(10, 1)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[10].value.includes(1)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(10, 2)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[10].value.includes(2)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(10, 3)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[10].value.includes(3)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => update(10, 4)}
                  style={[
                    styles.square,
                    {
                      backgroundColor: values[10].value.includes(4)
                        ? '#8d8'
                        : 'white',
                    },
                  ]}>
                  <Text style={styles.number}>4</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.item}>هشدار قطع بلندگو</Text>
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <View style={{flexDirection: 'row', gap: 30}}>
            <TouchableOpacity style={styles.addButton} onPress={save}>
              <Text style={commonStyles.addButtonText}>ذخیره</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ProButton]}
              onPress={() => {
                navigation.navigate('home');
                options.device_id = 0;
              }}>
              <Text style={commonStyles.addButtonText}>لغو</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    margin: '10%',
  },
  container_inner: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'space-between',
  },

  four_container: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    gap: 5,
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 5,
    opacity: 0.7,
  },
  number: {
    color: '#333',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#B8860B',
    borderWidth: 1,
    borderColor: 'darkgoldenrod', // Set your button background color
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  declineButton: {
    backgroundColor: '#adadad',
    borderWidth: 1,
    borderColor: 'gray', // Set your button background color
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40,
  },
  ProButton: {
    backgroundColor: '#adadad',
    borderWidth: 1,
    borderColor: 'gray', // Set your button background color
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40,
    width: '40%',
  },
  top: {
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    width: '100%',
    borderRadius: 5,
    height: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 10,
    gap: 30,
  },
  input: {
    borderWidth: 1,
    minWidth: 110,
    borderColor: '#000',
    height: 35,
    borderRadius: 5,
    paddingBottom: 8,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  middle: {
    width: '100%',
    borderRadius: 5,
    flexDirection: 'column',
    padding: 10,
    gap: 10,
  },
  item: {
    fontSize: 12,
    fontFamily: 'Samim',
    color: '#333',
  },
  middleItem: {
    backgroundColor: '#efefef',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#333',
    height: 50,
    shadowOffset: {
      width: -4, // Negative value creates a shadow to the left
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1,
  },
  bottom: {
    width: '100%',
  },
});

export default Reports;
