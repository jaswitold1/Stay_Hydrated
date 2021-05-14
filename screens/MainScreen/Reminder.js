import React, { useState, useEffect } from "react";
import { StyleSheet, Button, View } from "react-native";

import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const Reminder = () => {
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
        if (hour <= 24 && hour >= 10) {
          Notifications.presentNotificationAsync({
            title: "Stay Hydrated",
            body: "You should drink Your water now!",
          });
        } else {
          setCounter(0);
        }
      }, 2 * 60 * 60 * 1000)
    );
  };

  const stopReminding = () => {
    clearInterval(notificationInterval);
    setNotificationInterval({});
  };
  return (
    <View style={styles.container}>
      <Button onPress={() => startReminding()} title='Set Reminder' />
      <Button onPress={() => stopReminding()} title='Stop reminding' />
    </View>
  );
};

export default Reminder;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    height: "15%",
    justifyContent: "space-evenly",
  },
});
