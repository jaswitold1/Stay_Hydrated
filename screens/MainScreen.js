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

  //// two buttons one with start reminding one with stop reminding
  ////then interval checking if the hour is right and no reminding after 24
  let notificationInterval = {};
  const startReminding = () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    notificationInterval = setInterval(() => {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "Stay Hydrated",
          body: "You should drink Your water now!",
        },
        trigger: null,
      });
    }, 5000);
  };
  const stopReminding = () => {
    clearInterval(notificationInterval);
  };

  const drinkingbuttonHandler = () => {
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
      <Button onPress={startReminding} title='Set Reminder' />
      <Button onPress={stopReminding} title='Stop reminding' />
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
