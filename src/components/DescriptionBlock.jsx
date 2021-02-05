import React from "react"
import styled from "styled-components"
import Description from "./Description"
import NavBlock from "./NavBlock"

const StyledDescriptionBlock = styled.div`
  height: 600px;
  width: 600px;
  display: flex;
  flex-direction: column;
`

const DescriptionBlock = () => {
  return (
    <StyledDescriptionBlock>
      <Description />
      <NavBlock />
    </StyledDescriptionBlock>
  )
}

export default DescriptionBlock
