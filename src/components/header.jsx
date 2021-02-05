import React from "react"
import styled from "styled-components"
import Burger from "./Burger"
import logo from "../images/header-logo.png"

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-bottom: 1px solid #707070;
`

const StyledHeaderLogo = styled.img`
  height: 60px;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLogo src={logo} alt="headerlogo" />
      <Burger />
    </StyledHeader>
  )
}

export default Header
