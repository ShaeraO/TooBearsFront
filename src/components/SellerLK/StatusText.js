import React from 'react'
import styled from 'styled-components'


const Description = styled.section`
height: 250px;
width: 705px;
margin-left: 30rem;
margin-top: 2rem;
`
const Head = styled.h2`
font-family: 'Palatino';
font-weight: 400;
border-bottom: 0.5px solid rgba(215, 215, 215, 1);
line-height: 35px;
`
const Body = styled.p`
margin-top: 1.7rem;
font-family: 'Montserrat';
font-size: 17px;
font-weight: 400;
line-height: 25px;
`
const Text = () => {
  return (

    <Description>
        <Head>Статус</Head>
        <Body>Описание магазина I accept payment to Western Union And also there is the possibility of payment to my account in Slovenia using the bank details. Payment to western union (The recipient of funds in Slovenia is me).  Parcel from Slovenia. If it suits you, I will send Western Union payment instructions. It's simple and I've already made several deals with Australia, </Body>
    </Description>
  )
}

export default Text