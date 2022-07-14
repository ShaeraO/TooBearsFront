import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
margin-top: 3rem;
width: 235px;
height: 56px;
background: rgba(254, 97, 3, 0.2);
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 10px;
font-family: 'Montserrat';
font-size: 17px;
`

const ButtonSave = () => {
  return (
    <Btn>
        Разместить работу
    </Btn>
  )
}

export default ButtonSave