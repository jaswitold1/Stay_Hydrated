import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import WaterIndicator from "./MainScreen/WaterIndicator";
import Reminder from "./MainScreen/Reminder";
const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WaterIndicator />

      <View style={styles.separator} />
      <Reminder />
    </SafeAreaView>
  );
};

export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "70%",
  },
});
