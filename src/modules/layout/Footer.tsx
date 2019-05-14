import React from "react"
import {Text} from "react-native"
import {FooterTab, FooterWrapper} from "./styled"
import {NavigationInjectedProps, withNavigation} from "react-navigation"


const Footer: React.FC<NavigationInjectedProps> = ({navigation}) => (
  <FooterWrapper>
    <FooterTab><Text>link1</Text></FooterTab>
    <FooterTab><Text>link2</Text></FooterTab>
    <FooterTab><Text>link3</Text></FooterTab>
  </FooterWrapper>
)

export default withNavigation(Footer)