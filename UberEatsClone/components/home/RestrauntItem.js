import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Categories from "./Categories";

export default function RestrauntItem({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 20 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View style={{ padding: 15 }}>
            <RestrauntImage image={restaurant.image_url} />
            <RestrauntText name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestrauntImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: "100%",
        height: 190,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 15 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestrauntText = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginRight: 10,
    }}
  >
    <View style={{ margin: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>{props.name}</Text>
      <Text style={{ color: "grey" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "lightgrey",
        height: 30,
        width: 30,
        marginBottom: 12,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
