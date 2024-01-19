import React from "react";
import { Text, View, StyleSheet } from "react-native";
import IDevice from "../../interfaces/IDevice";
import { commonStyles } from "../../utils/commonStyles";

function Device({ title }: IDevice) {
    return (
        <View style={commonStyles.deviceContainer}>
            <Text style={commonStyles.deviceTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
});
export default Device;
