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
      header: null,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Log In",
      headerLeft: null,
    },
  },
  StayHydrated: MainScreen,
});

export default createAppContainer(StayHydratedNavigator);
