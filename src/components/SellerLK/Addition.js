import React from 'react'
import styled from 'styled-components'
import ButtonSave from './Settings/ButtonSave'
import Dest from './Settings/Dest'

const Section = styled.section`
position: relative;
margin: 10rem 30rem;
`

const Head = styled.div`
font-weight: 400;
font-size: 26px;
font-family: 'Palatino';
margin-top: 3rem;
`
const Block = styled.div`
border-bottom: 1px solid rgba(148, 148, 148, 0.5);
height: 580px;
margin-top: 2rem;
`

const FormBlock = styled.div`
position: relative;
padding-bottom: 1rem;
padding-top: 0rem;
width: 400px;
input{
    margin-top: 1rem;
    width: 500px;
    height: 35px;
    border: 1px solid #949494;
    border-radius: 5px;
    outline: none;
    text-indent: 10px;
}
`
const Name = styled.h4`
font-size: 18px;
font-weight: 400;
`
const Btn = styled.div`
margin: 10rem 4rem;
`

const Form = ({name = " "}) => {
    return(
        <FormBlock>
            <Name>{name}</Name>
            <input type="text" size="0" />
        </FormBlock>
    )
}

const Addition = () => {
  return (
    <>
    <Section>
    <Head>
        В интернете
    </Head>
    <Block>
        <Form name="Telegram" />
        <Form name="Instagram" />
        <Form name="Facebook" />
        <Form name="Pinterest" />
        <Form name="Vkontakte" />
        <Form name="Red Book" />

    </Block>
    <Dest />
    <Btn>
        <ButtonSave />
    </Btn>
    </Section>
    </>
  )
}

export default Addition