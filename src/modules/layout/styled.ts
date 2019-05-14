import styled from "styled-components"
import {Image, Text, View} from "react-native"


export const LayoutWrapper = styled(View)`
  height: 100%;
  display: flex;
`

export const HeaderWrapper = styled(View)`
  z-index: 100;
  background: ${(p) => p.theme.color.main};
  height: 50px;
  
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 10px;
  shadow-opacity: 0.4;
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

export const ContentWrapper = styled(View)`
   flex-grow: 1;
`

export const FooterWrapper = styled(View)`
  background: ${(p) => p.theme.color.main};
  height: 50px;
  flex-direction: row;
`


export const FooterTab = styled(View)`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`

