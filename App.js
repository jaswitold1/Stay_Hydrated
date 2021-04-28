import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [dataAuth, setDataAuth] = useState({});
  console.log(dataAuth);

  const handleInput = (text, from) => {
    setDataAuth({
      ...dataAuth,
      [from]: text,
    });
  };

  const handleLogin = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7TS1O_wthFLURxX30u5TFrTRqLNYM190",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: dataAuth.email,
          password: dataAuth.password,
          returnSecureToken: true,
        }),
      }
    )
      .then((resp) => console.log(resp.json()))
      /// then if response registered == true to costam
      .catch((error) => console.error(error));
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        onChangeText={(text) => handleInput(text, "email")}
        style={styles.input}
      />
      <Text>Pass</Text>
      <TextInput
        onChangeText={(text) => handleInput(text, "password")}
        style={styles.input}
      />
      <Button onPress={handleLogin} title='Login' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
  },
});
