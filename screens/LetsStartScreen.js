import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

const LetsStartScreen = (props) => {
  return (
    <View style={styles.container}>
      <Button
        title="Let's Start"
        onPress={() => {
          props.navigation.navigate({ routeName: "Login" });
        }}
      />
    </View>
  );
};

export default LetsStartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
