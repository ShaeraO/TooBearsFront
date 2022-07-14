import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
margin-top: 3rem;
width: 175px;
height: 40px;
background: rgba(213, 200, 200, 0.6);
border: 1px solid #D5C8C8;
border-radius: 10px;
font-family: 'Palatino';
font-size: 18px;
padding: -0,5rem 1rem;

span{
  font-size: 14px;
}
`

const ButtonAll = () => {
  return (
    <Btn>
        Все работы  <span>113</span>
    </Btn>
  )
}

export default ButtonAll