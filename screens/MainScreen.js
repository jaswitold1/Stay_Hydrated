import React, { useEffect, useState } from "react";
import { StyleSheet, Button, Text, SafeAreaView, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const MainScreen = () => {
  const [notificationInterval, setNotificationInterval] = useState({});
  const [counter, setCounter] = useState(0);
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
      }, 3000)
    );
  };
  ////2 * 60 * 60 * 1000
  const stopReminding = () => {
    clearInterval(notificationInterval);
    setNotificationInterval({});
  };

  const drinkingbuttonHandler = () => {
    if (counter < 8) {
      setCounter((prev) => prev + 1);
    }
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    drinkingMeterContainer: {
      display: "flex",
      alignItems: "center",
      width: 200,
      backgroundColor: counter > 7 ? "lightgreen" : "lightblue",
      height: counter * 70 + 18,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: "black",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.drinkingMeterContainer}>
        {counter < 8 ? (
          <Text>You have drank {counter} glasses</Text>
        ) : (
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text>Good job ! </Text>
            <Text>Recommended 8 glasses !</Text>
          </View>
        )}
      </View>

      <Button
        style={styles.buttonDrink}
        onPress={() => drinkingbuttonHandler()}
        title="I'm drinking my water right now!"
      />
      <View style={styles.separator} />

      <Button onPress={() => startReminding()} title='Set Reminder' />
      <Button onPress={() => stopReminding()} title='Stop reminding' />
    </SafeAreaView>
  );
};

export default MainScreen;
