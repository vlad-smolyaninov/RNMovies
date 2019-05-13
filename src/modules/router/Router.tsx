// import {Router, Scene, Stack} from "react-native-router-flux";
import Main from "../scenes/main/Main";
import {createAppContainer, createStackNavigator} from "react-navigation";
import * as React from "react"
import Layout from "../layout/Layout"
import {TransitionConfiguration} from "./animations"


const AppNavigator = createStackNavigator({
    Home: {
      screen: Main,
    },
    Details: {
      screen: Layout,
    }
  },
  {
    headerMode: 'none',
    transitionConfig: TransitionConfiguration
  }
);

export default createAppContainer(AppNavigator)