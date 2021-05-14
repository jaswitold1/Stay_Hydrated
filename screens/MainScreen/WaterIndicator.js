import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function WaterIndicator() {
  const [counter, setCounter] = useState(0);

  const drinkingbuttonHandler = () => {
    if (counter < 8) {
      setCounter((prev) => prev + 1);
    }
  };
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
    },
    drinkingMeterContainer: {
      display: "flex",
      alignItems: "center",
      width: 200,
      backgroundColor: counter > 7 ? "lightgreen" : "lightblue",
      height: counter * 70 + 18,
    },
  });

  return (
    <View style={styles.container}>
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
    </View>
  );
}
