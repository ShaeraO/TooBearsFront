import React from 'react'
import styled from 'styled-components'

import stars from '../../assets/stars.png'
import banner from '../../assets/banner.png'
import heart from '../../assets/heart.png'


const Section = styled.section`
width: 1120px;
margin: 0 auto;
`

const BannerMain = styled.div`
display: block;
width: 1120px;
position: relative;
justify-content: center;
align-items: center;
z-index: 1;

img{
    margin: -2rem 33%;
    width: 360px;
    height: 547px;
}
`
const Stars = styled.div`
position: absolute;
top: 0;
left: -12rem;
img{
    width: 900px;
    height: 600px;
}

`
const TextBlock = styled.div`
position: absolute;
top: 40%;
height: 150px;
width: 1120px;
`

const BannerTextHead = styled.h1`
position: relative;
width: 800px;
font-size: 48px;
font-family: 'Palatino';
font-weight: bold;
color: rgba(254, 97, 3, 0.35);
left: 2rem;
top: -2rem;
`

const BannerTextRight = styled.h3`
position: relative;
justify-content: space-between;
width: 300px;
height: 32px;
font-family: 'Palatino';
font-weight: 400;
font-size: 30px;
color: rgba(154, 114, 114, 0.8);
left: 65%;
top: -1.5rem;

img{
    width: 13px;
    height: 13px;
    position: relative;
    top: -80px;
    left: 135px
}
`

const BannerTextLeft = styled.h3`
position: relative;
width: 800px;
font-family: 'Palatino';
font-weight: 400;
font-size: 30px;
left: 14rem;
color: rgba(154, 114, 114, 0.8);
right: 0;
top: 1rem;
`


const Banner = () => {
  return (
    <Section>
        <BannerMain>
            <img src = {banner} alt="banner" />
            <Stars>
                <img src={stars} alt="stars" />
            </Stars>
            <TextBlock>
            <BannerTextHead>Create with love</BannerTextHead>
            <BannerTextLeft>teddy and dolls</BannerTextLeft>
            <BannerTextRight>
                you can find here
                <img src={heart} alt="heart" />
            </BannerTextRight>
        </TextBlock>
        </BannerMain>
    </Section>
  )
}

export default Banner