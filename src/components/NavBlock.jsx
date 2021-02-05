import React from "react"
import styled from "styled-components"

const StyledNavBlock = styled.div`
  height: 150px;
  width: 600px;
  background-color: var(--pink);
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledSVGDiv = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const StyledPageNumberDiv = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const NavBlock = () => {
  return (
    <StyledNavBlock>
      <StyledSVGDiv>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-left"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-right"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </StyledSVGDiv>
      <StyledPageNumberDiv>
        <h2>01</h2>/<h2>10</h2>
      </StyledPageNumberDiv>
    </StyledNavBlock>
  )
}

export default NavBlock
