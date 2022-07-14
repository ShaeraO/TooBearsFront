import React from 'react'
import styled from 'styled-components'
import ButtonMarket from './ButtonMarket'
import CardBlock from './CardBlock'


const Section = styled.section`
margin-left: -4rem;
`
const Description = styled.section`
position: relative;
height: 250px;
width: 705px;
margin-left: 34rem;
margin-top: 3rem;
`
const Head = styled.h2`
font-family: 'Palatino';
font-weight: 400;
line-height: 35px;
`
const BtnContainer = styled.div`
position: relative;
margin: -2rem 32.4rem;
`

const LastAdded = () => {
  return (
    <Section>
        <Description>
            <Head>Последние добавленные</Head>
            <BtnContainer>
            <ButtonMarket />
            </BtnContainer>
        </Description>
        <CardBlock />
    </Section>
  )
}

export default LastAdded