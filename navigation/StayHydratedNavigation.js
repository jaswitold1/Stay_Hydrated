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

      headerShown: false,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Log In",
      headerLeft: () => null,
      gestureEnabled: false,
    },
  },
  StayHydrated: {
    screen: MainScreen,
    navigationOptions: {
      title: "Stay Hydrated",
      headerLeft: () => null,
      gestureEnabled: false,
    },
  },
});

export default createAppContainer(StayHydratedNavigator);
