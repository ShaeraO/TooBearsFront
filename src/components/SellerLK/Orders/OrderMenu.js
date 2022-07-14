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
left: 30rem;
font-family: 'Palatino';
font-weight: 500;
font-size: 18px;


`
const MenuItem = styled.li`
width: 150px;
height: 25px;
border: 1px solid #F5F5F5;
border-radius: 10px;
margin: 0 1rem;
text-align: center;
padding: 0.3rem 0.5rem;
background-color: #F5F5F5;

&:first-child{
  background-color: #D5C8C8;

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