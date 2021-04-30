import React, { useEffect } from "react";
import { StyleSheet, Button, Text, SafeAreaView } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const MainScreen = () => {
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.granted !== "granted") {
          return;
        }
      });
  }, []);
  const triggerNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Stay Hydrated",
        body: "You should drink Your water now!",
      },
      trigger: {
        seconds: 10,
      },
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>You have drank</Text>
      <Button
        onPress={triggerNotificationHandler}
        title='I have drank the water'
      />
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
