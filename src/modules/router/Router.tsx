import React from "react"
// import {Router, Scene, Stack} from "react-native-router-flux";
import Main from "../scenes/main/Main";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Main
  }
});


export default createAppContainer(AppNavigator)