import React from 'react'
import styled from 'styled-components'
import img from '../../../assets/cardPhoto.png'
import {Link} from 'react-router-dom'


const Section = styled.section`
position: absolute;
width: 230px;
height: 473px;
background-color: #fff;
border: 1px solid rgba(171, 154, 144, 0.6);
border-radius: 20px;
margin: 5rem 13rem;
`
const ImgContainer = styled.div`
position: relative;
margin: 1rem 3.7rem;

img{
    width: 108px;
    height: 108px;
}
`
const TextBlock = styled.div`
width: 240px;
height: 280px;
margin: -1rem auto;
line-height: 25px;
`
const ShopName = styled.h3`
width: 200px;
margin: 1rem 2.4rem;
font-size: 16px;
`

const SellerName = styled.h3`
font-size: 14px;
font-weight: 400;
margin-left: 3.5rem;
margin-top: -0.7rem;
`

const ShopLocation = styled.span`
width: 80px;
height: 17px;
margin-left: 4.7rem;


img{
    position: absolute;
    margin-top: -1px;
    margin-left: -2px;
    width: 18px;
    height: 18px;
}
h4{
    margin-left: 5.7rem;
    margin-top: -28px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 13px;
}
`
const Subs = styled.h3`
font-size: 13px;
font-weight: 400;
margin-left: 3.6rem;
margin-top: -5px;
`

const MenuSeller = styled.ul`
margin-top: 1.4rem;
list-style: none;

`
const ButtonMenu = styled.li`
width: 175px;
height: 37px;
padding-left: 3.5rem;
text-align: left;
line-height: 35px;
border-top: 0.5px solid rgba(215, 215, 215, 1);
transition: all 0.3s ease;
cursor: pointer;
img{
    width: 18px;
    height: 18px;
    position: relative;
    margin-left: -1.5rem;
    top: 3px;
}

&:hover{
    background: #D5C8C8;
}
span{
    margin-left: 0.5rem;
}
`
const ButtonMenuBottom = styled.li`
width: 175px;
height: 37px;
padding-left: 3.5rem;
text-align: left;
line-height: 35px;
border-top: 0.5px solid rgba(215, 215, 215, 1);
border-radius: 0 0 20px 20px;
transition: all 0.3s ease;
cursor: pointer;

&:hover{
    background: #D5C8C8;
}
`

const SellerCard = () => {
  return (
    <Section>
        <Link to="account"><ImgContainer>
            <img src={img} alt="cardimg" />
        </ImgContainer></Link>
        <TextBlock>
            <ShopName>Funny Teddy Toys</ShopName>
            <SellerName>Oksana Ivanova</SellerName>
            <ShopLocation>
            <img src="https://svgshare.com/i/iCj.svg" alt="location"/>
                <h4>????????????</h4>
            </ShopLocation>
            <Subs>
                15 ??????????????????????
            </Subs>
            <MenuSeller>
                <Link to="Orders"><ButtonMenu><img src="https://svgshare.com/i/iBj.svg" alt='present' /><span>????????????</span></ButtonMenu></Link>
                <Link to="AddWork"><ButtonMenu>???????????????? ????????????</ButtonMenu></Link>
                <Link to="CheckWork"><ButtonMenu>?????? ????????????</ButtonMenu></Link>
                <Link to="Messenger"><ButtonMenu>??????????????????</ButtonMenu></Link>
                <Link to="Favorite"><ButtonMenu>??????????????????</ButtonMenu></Link>
                <Link to="SettingsMenu"><ButtonMenuBottom>??????????????????</ButtonMenuBottom></Link>
            </MenuSeller>
        </TextBlock>
        
    </Section>
  )
}

export default SellerCard