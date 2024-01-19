import React from "react";
import { ScrollView, View } from "react-native";
import Device from "./Device";
import IDevice from "../../interfaces/IDevice"
const devices = [
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
    {title: "دستگاه ۱"},
]
function Devices() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1,width: "80%", marginHorizontal: "10%", paddingBottom: 100 }}>
          {devices.map((dvc: IDevice, i) => (
                <Device key={i} title={dvc.title} />
            ))}
        </ScrollView>
    );
}

export default Devices;