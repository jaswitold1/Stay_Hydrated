import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LetsStartScreen from "../screens/LetsStartScreen";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";

const StayHydratedNavigator = createStackNavigator({
  LetsStart: {
    screen: LetsStartScreen,
    navigationOptions: {
      title: null,
      headerLeft: null,
      headerShown: false,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Log In",
      headerLeft: null,
    },
  },
  StayHydrated: {
    screen: MainScreen,
    navigationOptions: {
      title: "Stay Hydrated",
      headerLeft: null,
    },
  },
});

export default createAppContainer(StayHydratedNavigator);
