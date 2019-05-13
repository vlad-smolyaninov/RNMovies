import React from "react"
import {Router, Scene, Stack} from "react-native-router-flux";
import Main from "../scenes/main/Main";


export default () => {

  return (
    <Router>
      <Stack key="root">
        <Scene hideNavBar={true} key="home" component={Main}/>
      </Stack>
    </Router>
  )
}