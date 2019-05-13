import styled from "styled-components"
import {Image, Text, View} from "react-native"

export const Header = styled(View)`
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

export const Title = styled(Text)`
  text-transform: capitalize;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
`

export const Logo = styled(Image)`
  width: 46px;
  height: 40px;
  margin-right: 20px;
`