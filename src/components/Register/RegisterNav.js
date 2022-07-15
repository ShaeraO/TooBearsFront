import React from 'react'
import styled from 'styled-components'


const Block = styled.div`
background-color: rgba(213, 200, 200, 0.7);
width: 437px;
height: 77px;
margin-left: -1px;
border-radius: 25px 25px 0 0;
top: 0px;
`
const Menu = styled.ul`
position: relative;
width: 363px;
height: 53px;
list-style: none;
display: flex;
justify-content: center;
align-items: center;
left: 2.1rem;
top: 1.4rem;
font-family: 'Palatino';
font-size: 25px;
`
const MenuItem = styled.li`
margin: 0.6rem;
padding: 0.75rem 2rem;
border-radius: 10px 10px 0 0;
background: transparent;

&:first-child{
    background-color: #FFFFFF;
}
`

const RegisterNav = () => {
  return (
    <Block>
        <Menu>
            <MenuItem>Регистрация</MenuItem>
            <MenuItem>Вход</MenuItem>
        </Menu>
    </Block>
  )
}

export default RegisterNav