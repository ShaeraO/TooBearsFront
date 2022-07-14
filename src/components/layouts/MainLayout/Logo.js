import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/logo.png'

const ImgContainer = styled.div`
position: relative;
margin-top: 0.5rem;
img {
    height: 44px;
    filter: saturate(70%);
}

`

const Logo = () => {
  return (
    <ImgContainer>
        <img src={logo} alt="logo" />
    </ImgContainer>
  )
}

export default Logo