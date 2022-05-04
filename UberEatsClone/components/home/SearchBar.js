import { Text, View } from "react-native";
import React, { Component } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function SearchBar  ({cityHandler}) {
  
    return (
      <View style={{ marginTop: 15, flexDirection: "row" }}>
        <GooglePlacesAutocomplete
          query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }}
          onPress={(data,details = null)=>{
            console.log(data.description);
            const city = data.description.split(",")[0];
            cityHandler(city);
          }}
          placeholder="Search"
          styles={{
            textInput: {
              backgroundColor: "#eee",
              borderRadius: 20,
            },
            textInputContainer: {
              backgroundColor: "#eee",
              borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              margin: 10,
            },
          }}
          renderLeftButton={() => (
            <View style={{ marginLeft: 10 }}>
              <Ionicons name="location-sharp" size={24} />
            </View>
          )}
          renderRightButton={() => (
            <View
              style={{
                marginRight: 10,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                padding: 9,
                borderRadius: 20,
              }}
            >
              <AntDesign
                name="clockcircle"
                size={14}
                style={{ marginRight: 6 }}
              />
              <Text>Search</Text>
            </View>
          )}
        />
      </View>
    );
  
}
