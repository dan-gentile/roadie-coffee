import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "./globalStyle"
import Header from "./header"
import PageBlock from "./PageBlock"

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PageBlock />
    </>
  )
}

export default Layout
