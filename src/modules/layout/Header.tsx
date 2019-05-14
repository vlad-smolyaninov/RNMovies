import React from "react"
import {HeaderWrapper, Logo, Title} from "./styled"
import {NavigationInjectedProps, withNavigation} from "react-navigation"


const Layout: React.FC<NavigationInjectedProps> = ({navigation}) => (
  <HeaderWrapper>
    <Title>{navigation.state.routeName}</Title>
    <Logo
      source={{uri: 'https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-blue-fb50dee3bf664c866fd216e6cee64af33d20707ea3091ddc65c5e8aa4c152eb2.png'}}
    />
  </HeaderWrapper>
)

export default withNavigation(Layout)