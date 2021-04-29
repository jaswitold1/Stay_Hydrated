import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LetsStartScreen from "../screens/LetsStartScreen";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";

const StayHydratedNavigator = createStackNavigator({
  LetsStart: LetsStartScreen,
  Login: LoginScreen,
  Main: MainScreen,
});

export default createAppContainer(StayHydratedNavigator);
