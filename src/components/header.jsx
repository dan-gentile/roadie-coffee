import React from "react"
import styled from "styled-components"
import Burger from "./Burger"
import logo from "../images/header-logo.png"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-bottom: 1px solid #707070;
  opacity: 0;
  animation: opacity 1.5s ease-in forwards;
  @keyframes opacity {
    to {
      opacity: 1;
    }
  }
`

const StyledHeaderLogo = styled.img`
  height: 60px;
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledHeaderLogo src={logo} alt="headerlogo" />
      </Link>
      <Burger />
    </StyledHeader>
  )
}

export default Header
