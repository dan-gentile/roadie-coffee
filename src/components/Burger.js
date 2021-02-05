import React, { useState } from "react"
import styled from "styled-components"

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  flex-direction: column;
  justify-content: space-around;
  z-index: 100;
  display: flex;
  position: fixed;
  top: 24px;
  right: 300px;
  cursor: pointer;

  @media (max-width: 1200px) {
    right: 150px;
  }

  @media (max-width: 800px) {
    right: 80px;
  }

  @media (max-width: 600px) {
    right: 40px;
  }

  div {
    width: 2rem;
    height: 0.2rem;
    background-color: ${({ open }) =>
      open ? "var(--white)" : "var(--yellow)"};
    border-radius: 4px;
    transform-origin: 1px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Burger = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}

export default Burger
