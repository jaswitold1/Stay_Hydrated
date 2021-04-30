import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import * as Notifications from "expo-notifications";

const MainScreen = () => {
  const triggerNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Stay Hydrated",
        body: "You should drink Your water now!",
      },
    });
  };
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
