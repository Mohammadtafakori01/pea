import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { commonStyles } from "../../utils/commonStyles";

function Search() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", searchText);
  };

  return (
    <View style={commonStyles.search_container}>
      <TextInput
        style={commonStyles.input}
        placeholder="جستجو..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity style={commonStyles.search_button} onPress={handleSearch}>
        <Image source={require('../../assets/icons/search.png')} style={commonStyles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default Search;
