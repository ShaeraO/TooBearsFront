import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.ul`
width: 615px;
display: flex;
list-style: none;
justify-content: space-between;
align-items: center;
position: absolute;
top: 15rem;
left: 30rem;
font-weight: 500;
font-size: 18px;

`
const MenuItem = styled.li`
width: 160px;
height: 24px;
border: 1px solid #F5F5F5;
border-radius: 10px;
margin: 0 0rem;
justify-content: center;
text-align: center;
padding: 0.5rem 1rem;
background-color: rgba(213, 200, 200, 0.6);
font-weight: 400;
font-family: 'Palatino';

&:first-child{
  background-color: rgba(213, 200, 200, 0.6);
}
`


const OrderMenu = () => {
  return (
    <Menu>
        <Link to='Settings'><MenuItem>Общие</MenuItem></Link>
        <Link to='Addition'><MenuItem>Дополнительные</MenuItem></Link>
        <Link to='Subs'><MenuItem>Системы оплаты</MenuItem></Link>
    </Menu>
  )
}

export default OrderMenu