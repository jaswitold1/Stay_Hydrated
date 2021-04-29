import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

const LetsStartScreen = (props) => {
  return (
    <View>
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

const styles = StyleSheet.create({});
