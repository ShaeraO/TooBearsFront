import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Searchbar from './Searchbar'
import img from '../assets/shop.png'
import MiniProfile from './MiniProfile'

const Section = styled.nav`
width: 100%;
`

const SearchbarCont = styled.div`
position: absolute;
left: 34%;
`
const TopNav = styled.div`
height: 5rem;
justify-content: space-between;
display: flex;
align-items: center;
margin: 0 auto;
width: 100%;
`
const BotNav = styled.div`
background-color: rgba(234, 226, 218, 0.6);
height: 61px;
`

const Menu = styled.ul`
margin: 0 auto;
width: 1200px;
height: 61px;
display: flex;
font-size: 12px;
font-family: 'Palatino Linotype';
font-weight: 500;
justify-content: center;
align-items: center;
list-style: none;
text-transform: uppercase;
`
const MenuItem = styled.li`
margin: 0 1.8rem;
color: #000;
cursor: pointer;
transition: all 0.3s ease;

&:hover{
  transform: scale(1.2);
}
`
const ShopCart = styled.div`
img{
  position: absolute;
  width: 22px;
  height: 22px;
  right: 11.3rem;
  cursor: pointer;
  top: 6.2rem;
}
`
const MiniProfileCont = styled.div`
position: absolute;
right: 10.3rem;
top: 28px;
`
const NavBar = () => {
  return (
    <Section id="navigation">
    <TopNav>
     <Logo />
      <SearchbarCont>
        <Searchbar placeholder="Поиск..."/>
      </SearchbarCont>
      <MiniProfileCont>
      <MiniProfile />
      </MiniProfileCont>
    </TopNav>
    <BotNav>
      <Menu>
        <MenuItem>Категории</MenuItem>
        <MenuItem>Аукционы</MenuItem>
        <MenuItem>Онлайн Шоу</MenuItem>
        <MenuItem>Мастер Классы</MenuItem>
        <MenuItem>Выкройки</MenuItem>
        <MenuItem>Мастера</MenuItem>
        <MenuItem>Новости</MenuItem>
      </Menu>
      <ShopCart>
        <img src={img} alt="cart" />
      </ShopCart>
    </BotNav>
    </Section>
  )
}

export default NavBar