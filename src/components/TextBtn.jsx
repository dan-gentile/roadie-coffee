import React from "react"
import styled from "styled-components"

const StyledTextBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--grey);
  font-size: 1rem;
  cursor: pointer;

  :hover {
    color: var(--black);
  }
`

const TextBtn = props => {
  return <StyledTextBtn {...props}>{props.name}</StyledTextBtn>
}
export default TextBtn
