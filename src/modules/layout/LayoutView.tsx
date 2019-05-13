import React from "react"
import {Image, Text, View} from "react-native"
import styled from "styled-components"

const Header = styled(View)`
  z-index: 100;
  background: ${(p) => p.theme.color.main};
  height: 50px;
  
  elevation: 10;
  shadow-color: #000;
  shadow-offset: 10px 10px;
  shadow-opacity: 1;
  shadow-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(Text)`
  text-transform: capitalize;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
`

const Logo = styled(Image)`
  width: 46px;
  height: 40px;
  margin-right: 20px;
`

export default ({title, children}: {
  title: string,
  children: any
}) => {

  return (
    <>
      <View style={{height: '100%'}}>
        <Header>
          <Title>{title}</Title>
          <Logo
            source={{uri: 'https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-blue-fb50dee3bf664c866fd216e6cee64af33d20707ea3091ddc65c5e8aa4c152eb2.png'}}
          />
        </Header>
        {children}
      </View>
    </>
  )
}