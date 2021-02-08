import React from "react"
import styled from "styled-components"
import DescriptionBlock from "./DescriptionBlock"
import ImageBlock from "./imageBlock"

const StyledBlock = styled.div`
  height: 600px;
  width: 1200px;
  box-shadow: var(--box-shadow);
  margin: 100px auto;
  display: flex;
  border-radius: 4px;
  opacity: 0;
  animation: opacity 1.5s ease-in forwards;
  @keyframes opacity {
    to {
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 600px;
    height: 1200px;
  }

  @media (max-width: 600px) {
    width: 340px;
    height: 940px;
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
