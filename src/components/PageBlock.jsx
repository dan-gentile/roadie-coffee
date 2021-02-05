import React from "react"
import styled from "styled-components"
import DescriptionBlock from "./DescriptionBlock"
import ImageBlock from "./imageBlock"

const StyledBlock = styled.div`
  height: 600px;
  width: 1200px;
  margin: 60px auto;
  display: flex;
  opacity: 0;
  animation: opacity 1.5s ease-in forwards;
  @keyframes opacity {
    to {
      opacity: 1;
    }
  }
`

const PageBlock = () => {
  return (
    <StyledBlock>
      <ImageBlock />
      <DescriptionBlock />
    </StyledBlock>
  )
}

export default PageBlock
