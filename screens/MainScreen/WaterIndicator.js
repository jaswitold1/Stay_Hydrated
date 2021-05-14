import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Animated } from "react-native";

export default function WaterIndicator() {
  const value = useState(new Animated.Value(18))[0];
  //////React Native Animated API forced using state of value 1 for issues with non dynamic update of the state within function moveBar
  const [counter, setCounter] = useState(1);

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
    },
    drinkingMeterContainer: {
      display: "flex",
      alignItems: "center",
      width: 200,
      backgroundColor: counter - 1 > 7 ? "lightgreen" : "lightblue",
    },
    goodJob: {
      display: "flex",
      alignItems: "center",
    },
  });

  const moveBar = () => {
    if (counter < 9) {
      setCounter((prev) => prev + 1);
    }

    Animated.timing(value, {
      toValue: 18 + counter * 50,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[{ height: value }, styles.drinkingMeterContainer]}>
        {counter < 9 ? (
          <Text>You have drank {counter - 1} glasses</Text>
        ) : (
          <View style={styles.goodJob}>
            <Text>Good job ! </Text>
            <Text>Recommended 8 glasses !</Text>
          </View>
        )}
      </Animated.View>

      <Button
        style={styles.buttonDrink}
        onPress={() => moveBar()}
        title="I'm drinking my water right now!"
      />
    </View>
  );
}
