import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItem from "../components/restaurantDetail/MenuItem";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Tandoori Chicken",
    description: " Amazing Indian Dishen with sizzlers",
    price: "$19.20",
    image:
      "https://culinaryginger.com/wp-content/uploads/Grilled-Tandoori-Chicken-Kebabs-4--720x540.jpg",
  },
  {
    title: "Biryani ",
    description: " Amazing Biryani with sizzlers",
    price: "$11.20",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg",
  },
  {
    title: "Dal Makhni ",
    description: "  Dal makni with sizzlers",
    price: "$14",
    image:
      "https://myfoodstory.com/wp-content/uploads/2018/08/Dal-Makhani-New-3.jpg",
  },
  {
    title: "Shai Paneer ",
    description: "  Shahi Paneer with sizzlers",
    price: "$10.20",
    image: "https://static.toiimg.com/photo/52446409.cms",
  },
  {
    title: "Kadhai Paneer ",
    description: "  Kadhai Paneer with sizzlers",
    price: "$14.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2020/03/Best-Kadai-Paneer-Recipe.jpg",
  },
];
export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
