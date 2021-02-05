import React from "react"
import styled from "styled-components"
import HotChocolate from "../images/IMG_8779.jpg"

const StyledImgBlock = styled.img`
  display: block;
  object-fit: cover;
  width: 600px;
  height: 600px;
`

const ImageBlock = () => {
  return (
    <StyledImgBlock src={HotChocolate} alt="hot chocolate"></StyledImgBlock>
  )
}

export default ImageBlock
