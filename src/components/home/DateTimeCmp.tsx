import DatePicker from "@mohamadkh75/react-native-jalali-datepicker";
interface DT {
    selected: string;
    onchange: (val: any) => void;
    onclose: () => void;
}
function DateTimeCmp({selected, onchange, onclose}: DT) {
    return   <DatePicker
    style={{
      width: '95%',
      paddingVertical: 15,
      alignSelf: 'center',
      backgroundColor: '#1e272e',
      borderWidth: 1,
      borderColor: '#4bcffa',
      borderRadius: 10,
      elevation: 4,
      position: 'absolute',
      top: '100%',
      left: 0,
      zIndex: 1000
    }}
    selected={selected}
    dateSeparator="/"
    minDate="1402/1/1"
    maxDate="1410/1/18"
    headerContainerStyle={{height: '15%'}}
    yearMonthBoxStyle={{
      width: '30%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 10,
    }}
    yearMonthTextStyle={{
      fontSize: 18,
      color: '#4bcffa',
      fontFamily: 'Samim',
    }}
    iconContainerStyle={{width: `${100 / 7}%`}}
    backIconStyle={{
      width: 20,
      height: 20,
      resizeMode: 'center',
      tintColor: '#808e9b',
    }}
    nextIconStyle={{
      width: 20,
      height: 20,
      resizeMode: 'center',
      tintColor: '#4bcffa',
    }}
    eachYearStyle={{
      width: 110,
      height: 82,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4bcffa',
      marginTop: '1.5%',
      marginBottom: 5,
      marginHorizontal: '1.5%',
      borderRadius: 10,
      elevation: 3,
    }}
    eachYearTextStyle={{
      fontSize: 16,
      color: 'white',
      fontFamily: 'Samim',
    }}
    eachMonthStyle={{
      width: `${88 / 3}%`,
      height: `${88 / 4}%`,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4bcffa',
      marginBottom: '3%',
      borderRadius: 10,
      elevation: 3,
    }}
    eachMonthTextStyle={{fontSize: 16, color: 'white', fontFamily: 'Samim'}}
    weekdaysContainerStyle={{height: '14%'}}
    weekdayStyle={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    weekdayTextStyle={{
      fontSize: 16,
      color: '#808e9b',
      marginBottom: 5,
      fontFamily: 'Samim',
    }}
    borderColor="#4bcffa"
    dayStyle={{
      width: `${100 / 7}%`,
      justifyContent: 'center',
      alignItems: 'center',
      aspectRatio: 1 / 1,
    }}
    selectedDayStyle={{
      width: '70%',
      aspectRatio: 1 / 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
    }}
    selectedDayColor="#4bcffa"
    dayTextStyle={{fontSize: 18, fontFamily: 'Samim'}}
    selectedDayTextColor="white"
    dayTextColor="#4bcffa"
    disabledTextColor="#4bcffa66"
    onDateChange={(date: any) => {onchange(date); onclose()}}
  />
}

export default DateTimeCmp;