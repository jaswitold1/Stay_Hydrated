import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>You have drank</Text>
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
});
