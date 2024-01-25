import React from "react";
import { Text, View } from "react-native";
import { commonStyles } from "../../utils/commonStyles";
function Events({text, date}: any) {

  return (
    <View style={{borderColor: '#aaa', borderWidth: 1, backgroundColor: '#8fbc8f25', paddingHorizontal: 10, paddingVertical: 3, flexDirection: 'row',  justifyContent: 'space-between'}}>
        <Text style={[commonStyles.text, {color: "#333"}]}>{date}</Text>
        <Text style={[commonStyles.text, {color: "#333"}]}>{text}</Text>
    </View>
  );
}

export default Events;
