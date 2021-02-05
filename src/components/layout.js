import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "./globalStyle"
import Header from "./header"

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  )
}

export default Layout
