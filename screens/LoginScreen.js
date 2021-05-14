import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
  Button,
  View,
} from "react-native";

const LoginScreen = (props) => {
  const [dataAuth, setDataAuth] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInput = (text, from) => {
    setDataAuth({
      ...dataAuth,
      [from]: text,
    });
  };

  //////// async was needed for proper ActivityIndicator use
  const handleLogin = async () => {
    setIsLoading(true);
    await fetch(
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
      .then((resp) => resp.json())
      .then((resp) =>
        resp.registered == true
          ? handleMoveToLogin()
          : setError(resp.error.message)
      )

      .catch((err) => setError(err.error.message));
    setIsLoading(false);
  };

  const handleMoveToLogin = () => {
    setError("");
    props.navigation.navigate({ routeName: "StayHydrated" });
  };

  return isLoading ? (
    <ActivityIndicator size='small' color='red' />
  ) : (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        onChangeText={(text) => handleInput(text, "email")}
        style={styles.input}
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        onChangeText={(text) => handleInput(text, "password")}
        style={styles.input}
      />
      <Text style={{ color: "red" }}>{error}</Text>
      <Button onPress={handleLogin} title='Login' />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "40%",
    marginVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "black",
    borderStyle: "solid",
  },
});
