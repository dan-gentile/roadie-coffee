import React from "react"
import styled from "styled-components"
import HotChocolate from "../images/IMG_8779.jpg"

const StyledImgBlock = styled.img`
  display: block;
  object-fit: cover;
  width: 600px;
  height: 600px;
  border-radius: 4px 0 0 4px;
  transform: translateX(-10%);
  animation: move-it 2s forwards;

  @media (max-width: 600px) {
    width: 340px;
    height: 340px;
  }

  @keyframes move-it {
    to {
      transform: translateX(0);
    }
  }
`

const ImageBlock = () => {
  return (
    <StyledImgBlock src={HotChocolate} alt="hot chocolate"></StyledImgBlock>
  )
}

export default ImageBlock
