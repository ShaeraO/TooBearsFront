import React from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components'

const ImageContainer = styled.div`

position: absolute;
top: 1.5rem;
left: 11.75rem;
display: flex;

img {
  width: 187px;
  height: 41;
  filter: saturate(90%);
}
`

const Logo = () => {
  return (
  <ImageContainer>
      <img src={logo} alt="logo" />
  </ImageContainer>
  )
}

export default Logo