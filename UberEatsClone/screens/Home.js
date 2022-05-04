import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestrauntItem from "../components/home/RestrauntItem";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [activeTab, setActiveTab] = useState("Delivery");
  const [city,setCity]= useState("San Francisco");
  const YELP_API_KEY =
    "L9BEc0OnMHm1MMiTBkGk5OT1wlY0xS9pmgXFmGtdvu5gfwHCueVS6YBsoRrykQ9CRXTSJY0rr27OHMM0iML5ebWsK6-HeQdsZZHUEg6ctyLV7XXQS22kyyeX_uT9YXYx";
  const getRestaurantsFromYelp = (aync) => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        setRestaurantData(
          json.businesses.filter((business) =>
          // alert(JSON.stringify(business.transactions)),
          business.transactions.includes(activeTab.toLowerCase())
          )
        );
        // alert(JSON.stringify(json.businesses.transactions));
      });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [activeTab,city]);
  // return false;
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestrauntItem
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
