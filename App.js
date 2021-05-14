import React from "react";
import { StyleSheet } from "react-native";
import StayHydratedNavigator from "./navigation/StayHydratedNavigation";

export default function App() {
  return <StayHydratedNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
