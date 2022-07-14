import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
position: relative;
width: 210px;
height: 40px;
background-color: rgba(254, 97, 3, 0.2);
color:  #000;
outline: none;
border: 0px solid #808080;
font-family: Montserrat;
font-weight: 500;
font-size: 16px;
border-radius: 10px;
cursor: pointer;
margin-left: 0rem;
margin-top: 2rem;

`

const ButtonSave = () => {
  return (
    <Btn>
        <span>Сохранить изменения</span>
    </Btn>
  )
}

export default ButtonSave