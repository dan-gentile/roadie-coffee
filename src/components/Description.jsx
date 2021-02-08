import React, { useState } from "react"
import styled from "styled-components"
import TextBtn from "./TextBtn"

const StyledDescription = styled.div`
  height: 450px;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  perspective: 1000px;

  transform: translateX(10%);
  animation: move-it 2s forwards;

  @keyframes move-it {
    to {
      transform: translateX(0);
    }
  }
`

const StyledDescriptionInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ flip }) => (flip ? "rotateY(180deg)" : "rotateY(0)")};
`

const StyledDescriptionFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: var(--yellow);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0 4px 0 0;

  h1 {
    font-weight: 800;
    font-size: 44px;
  }

  p {
    width: 320px;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 1px;
  }
`

const StyledDescriptionBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: var(--yellow);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 4px 0 0;
`
const StyledBtnDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Description = () => {
  const [flip, setFlip] = useState(false)

  return (
    <StyledDescription>
      <StyledDescriptionInner flip={flip}>
        <StyledDescriptionFront>
          <h1>Hot Chocolate</h1>
          <p>
            Sometime you just need a warm cup of sugary nostalgia. Below you’ll
            find a simple recipe for that classic Hot Chocolate, most of us grew
            up on. This recipe is made with whole milk, though you can easily
            sub that out with any dairy free alternative.
          </p>
          <StyledBtnDiv>
            <TextBtn name="Watch" />
            |
            <TextBtn name="Recipe" onClick={() => setFlip(true)} />
          </StyledBtnDiv>
        </StyledDescriptionFront>
        <StyledDescriptionBack>
          <StyledBtnDiv>
            <TextBtn name="Watch" />
            |
            <TextBtn name="Description" onClick={() => setFlip(false)} />
          </StyledBtnDiv>
        </StyledDescriptionBack>
      </StyledDescriptionInner>
    </StyledDescription>
  )
}

export default Description
