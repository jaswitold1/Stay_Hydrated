import React, { useEffect, useState } from "react";
import { StyleSheet, Button, Text, SafeAreaView } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const MainScreen = () => {
  const [notificationInterval, setNotificationInterval] = useState({});
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

  const startReminding = () => {
    setNotificationInterval(
      setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        if (hour <= 22 && hour >= 10) {
          Notifications.presentNotificationAsync({
            title: "Stay Hydrated",
            body: "You should drink Your water now!",
          });
        }

        ///// if date = 24 then reset style value of water lvl to 0
      }, 3000)
    );
  };
  const stopReminding = () => {
    clearInterval(notificationInterval);
    setNotificationInterval({});
  };

  const drinkingbuttonHandler = () => {
    /// setStateOfVariableStyleOfWaterLvl + 1
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>You have drank</Text>
      <Button onPress={() => startReminding()} title='Set Reminder' />
      <Button onPress={() => stopReminding()} title='Stop reminding' />
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
