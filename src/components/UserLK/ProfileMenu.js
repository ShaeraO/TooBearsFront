import React from 'react'
import styled from 'styled-components'
import img from '../assets/cardPhoto.png'
import {Link} from 'react-router-dom'


const Section = styled.section`
width: 322px;
height: 265px;
margin: 5rem 11rem;
`
const ImgCont = styled.div`
margin: 0 6.2rem;
img{
    width: 114px;
    height: 108px;
}
`
const Text = styled.h3`
width: 222px;
font-size: 22px;
font-weight: 400;
margin: 0 4.2rem;
`
const Menu = styled.div`
background: #F5F5F5;
border: 1px solid #F5F5F5;
border-radius: 25px;
width: 290px;
height: 97px;
margin: 1rem 0.7rem;
`
const MenuCont = styled.div`
width: 320px;
margin: 0rem 2.5rem;
`

const MenuItem = styled.h3`
height: 35px;
width: fit-content;
font-size: 17px;
font-weight: 400;
margin: 0.8rem -1.1rem;
padding: 0rem 0rem;

&:first-child{
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

img{
    width: 16px;
    padding: 0 0.3rem;
}
`
const ProfileMenu = () => {
  return (
    <Section>
        <ImgCont>
            <Link to="/"><img src={img} alt='profile' /></Link>
        </ImgCont>
        <Text>
            Oksana Ivanova
        </Text>
        <Menu>
            <MenuCont>
            <Link to="Update"><MenuItem><img src="https://svgshare.com/i/iFy.svg" alt="pen" />Редактировать Профиль</MenuItem></Link>
            <Link to="Favorite"><MenuItem><img src="https://svgshare.com/i/iG7.svg" alt="heart" />Избранное</MenuItem></Link>
            </MenuCont>
        </Menu>
    </Section>
  )
}

export default ProfileMenu