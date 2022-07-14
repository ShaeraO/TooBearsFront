import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
width: 85px;
height: 30px;
background: transparent;
display: inline-block;
color: #000;
outline: none;
border: 1px solid #949494;
font-family: "Montserrat", sans-serif;
font-weight: 600;
border-radius: 50px;
cursor: pointer;
opacity: 0.8;
`


const Button = ({text, link}) => {
  return (
    <Btn>
        <a href={link} aria-label={text} target="_blank" rel="noreferrer">
            {text}
        </a>
    </Btn>
  )
}

export default Button