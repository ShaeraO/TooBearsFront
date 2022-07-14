import React from 'react'
import styled from 'styled-components'


const Btn = styled.button`
width: 210px;
height: 36px;
background: rgba(189, 169, 158, 0.1);
margin-left: -1.5rem;
display: inline-block;
color:  #000;
outline: none;
border: 1px solid rgba(189, 200, 180, 0.1);
font-family: "Montserrat", sans-serif;
font-size: 16px;
font-weight: 500;
padding: 0.2rem 0.5rem;
border-radius: 10px;
cursor: pointer;
opacity: 1;
span{
  opacity: 0.9;
}
img{
  width: 16px;
  height: 15px;
  position: absolute;
  margin: 3px 3px;
}
`


const ButtonMarket = () => {
  return (
    <Btn>
       <span>Перейти в магазин</span><img src="https://svgshare.com/i/iDf.svg" alt="arrow"/>
    </Btn>
  )
}

export default ButtonMarket