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
font-size: 14px;
padding-top: 0px;
padding-right: 5px;

span{
  position: relative;
  bottom: 7px;
  right: 7px;
}

img{
  width: 20px;
  height: 20px;
  transform: scale(0.8);
  filter: contrast(1);
  margin: 3px 10px;
}
`


const ButtonFlag = ({text, link}) => {
  return (
    <Btn>
      <a href={link} aria-label={text} target="_blank" rel="noreferrer">
      
      <img src="https://svgshare.com/i/iBk.svg" alt="flag" />
      <span>
      {text} 
      </span>
      </a>
    </Btn>
  )
}

export default ButtonFlag