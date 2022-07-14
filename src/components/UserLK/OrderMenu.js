import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.ul`
width: 825px;
display: flex;
list-style: none;
justify-content: space-between;
align-items: center;
position: absolute;
top: 16rem;
left: 31rem;
font-weight: 400;
font-size: 18px;


`
const MenuItem = styled.li`
width: 150px;
height: 20px;
border: 1px solid #F5F5F5;
border-radius: 10px;
margin: 0 1rem;
justify-content: center;
text-align: center;
padding: 0.5rem 0.6rem 0.8rem;
background-color: rgba(213, 200, 200, 0.6);
font-weight: 400;
font-family: 'Palatino';

&:first-child{
  background-color: rgba(213, 200, 200, 0.6);
}
img{
    width: 20px;
    height: 20px;
    margin-left: 5px;
    margin-bottom: -3px;
    opacity: 0.8;
}
`


const OrderMenu = () => {
  return (
    <Menu>
        <Link to='/'><MenuItem>Мои заказы</MenuItem></Link>
        <Link to='Message'><MenuItem>Сообщения</MenuItem></Link>
        <Link to='Subs'><MenuItem>Подписки</MenuItem></Link>
        <Link to='New'><MenuItem>Что нового<img src="https://svgshare.com/i/iCa.svg" alt='bell' /></MenuItem></Link>
    </Menu>
  )
}

export default OrderMenu