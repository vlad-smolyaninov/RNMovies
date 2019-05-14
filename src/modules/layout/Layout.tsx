import React, {ReactNode} from "react"
import {ContentWrapper, LayoutWrapper} from "./styled"
import Footer from "./Footer"
import Header from "./Header"

export interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({children}) => (
  <LayoutWrapper>
    <Header/>
    <ContentWrapper>
      {children}
    </ContentWrapper>
    <Footer/>
  </LayoutWrapper>
)

export default Layout