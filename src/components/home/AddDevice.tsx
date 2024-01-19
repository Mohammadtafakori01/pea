import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { commonStyles } from "../../utils/commonStyles";
import { titles } from "../../utils/titles";
interface AddDevice {
    onPress: () => void;
  }
  
function AddDevice({ onPress }: AddDevice) {
    return (
        <View style={commonStyles.addButtonContainer}>
            <TouchableOpacity onPress={onPress} style={commonStyles.addButton}>
            <Text style={[commonStyles.addButtonText, commonStyles.text]}>{titles.addDevice}</Text>
                <Image source={require("../../assets/icons/add.png")} style={commonStyles.icon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
   
});

export default AddDevice;
