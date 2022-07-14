import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
font-weight: 400;
font-size: 26px;
padding-bottom: 10px;
margin-top: 3rem;
border-bottom: 1px solid rgba(148, 148, 148, 0.5);
font-family: 'Palatino';
`
const Block = styled.div`
border-bottom: 1px solid rgba(148, 148, 148, 0.5);
height: 400px;
margin-top: 2rem;
`

const FormBlock = styled.div`
position: relative;
padding-bottom: 1rem;
padding-top: 0rem;
width: 400px;
input{
    margin-top: 1rem;
    width: 350px;
    height: 35px;
    border: 1px solid #f1f1f1;
    background: #f1f1f1;
    border-radius: 5px;
    outline: none;
    text-indent: 10px;
}
`
const Name = styled.h4`
font-size: 18px;
font-weight: 400;
`

const Form = ({name = " "}) => {
    return(
        <FormBlock>
            <Name>{name}</Name>
            <input type="text" size="0" />
        </FormBlock>
    )
}

const FirstInfo = () => {
  return (
    <>
    <Head>
        Настройки профиля
    </Head>
    <Block>
        <Form name="Имя на английском" />
        <Form name="Фамилия на английском" />
        <Form name="Email" />
        <Form name="Страна" />
    </Block>
    </>
  )
}

export default FirstInfo