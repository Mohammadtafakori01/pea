import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { commonStyles } from "../../utils/commonStyles";
import IDevice from "../../interfaces/IDevice";

function Search({devices, setDevices, getDevices}: any) {
  const [searchText, setSearchText] = useState("");



  useEffect(() => {
    const searchAndFilter = () => {
      const searchTerm = searchText.toLowerCase();
      const filtered = devices.filter((device: IDevice) =>
        device.title.toLowerCase().includes(searchTerm)
      );
      setDevices(filtered);
    };

    searchAndFilter(); // Initial filter when component mounts

    // You can add additional conditions if needed
  }, [searchText]); // This effect depends on the searchText state

  const handleSearch = (text: string) => {
    if(!text) getDevices()
    setSearchText(text);
  };

  return (
    <View style={commonStyles.search_container}>
      <TextInput
        style={commonStyles.input}
        placeholder="جستجو..."
        value={searchText}
        onChangeText={handleSearch}
      />
      <TouchableOpacity style={commonStyles.search_button} onPress={() => handleSearch(searchText)}>
        <Image source={require('../../assets/icons/search.png')} style={commonStyles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default Search;
