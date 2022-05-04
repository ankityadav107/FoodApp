import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import RestaurantDetail from "./screens/RestaurantDetail";
import Home from "./screens/Home";
import RootNavigation from "./navigation";

export default function App() {
  return <RootNavigation />;
}
