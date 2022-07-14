import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
margin: 3rem 1rem;
width: 175px;
height: 40px;
background: #F5F5F5;
border: 1px solid #E1DFD2;
border-radius: 10px;
font-family: 'Palatino';
font-size: 18px;
padding: -0,5rem 1rem;

span{
  font-size: 14px;
}
`

const ButtonSold = () => {
  return (
    <Btn>
        Проданные  <span>13</span>
    </Btn>
  )
}

export default ButtonSold