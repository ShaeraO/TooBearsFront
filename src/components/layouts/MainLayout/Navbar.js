import React, { useContext } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Searchbar from './Searchbar'
import Button from './Button'
import ButtonFlag from './ButtonFlag'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'

const Section = styled.nav`
width: 100%;
`
const TopNav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 75%;
margin: 1rem auto;
`

const SearchbarCont = styled.div`
margin-top: 0rem;
margin-right: 3rem;
`

const ButtonContainer = styled.div`
display: flex;
width: 180px;
margin-right: 7px;
justify-content: space-between;
`
const BotNav = styled.div`
background-color: rgba(234, 226, 218, 0.6);
height: 60px;
margin-top: -0.7rem;
`

const Menu = styled.ul`
display: flex;
list-style: none;
justify-content: center;
align-items: center;
height: 60px;
text-transform: uppercase;
font-family: 'Palatino';
font-size: 13px;
font-weight: 500;
`

const MenuItem = styled.li`
margin: 0 1.6rem;
color: #000;
cursor: pointer;
transition: all 0.4s ease;

&:hover{
    transform: scale(1.3);
}
`

const Navbar = () => {

    const { data } = useContext(AuthContext);

  return (
    <Section>
        <TopNav>
            <Link to="/"><Logo /></Link>
            <SearchbarCont>
                <Searchbar placeholder="Поиск..."/>
            </SearchbarCont>
            <ButtonContainer>
                {data ? <Link to="account"><span>{data.username}</span></Link> : ( <Link to="auth"><Button text="ВХОД" /></Link> )}
                <ButtonFlag text="RU" />
            </ButtonContainer>
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
        </BotNav>
    </Section>
  )
}

export default Navbar