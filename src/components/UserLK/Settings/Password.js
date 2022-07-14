import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
border-bottom: 1px solid rgba(148, 148, 148, 0.5);
height: 190px;
margin-top: -1rem;
`

const Head = styled.div`
font-weight: 400;
font-size: 18px;

margin-top: 2.8rem;
`

const Name = styled.div`
font-size: 15px;
font-weight: 500;
`
const PassBlock = styled.div`
margin-top: 1rem;
input{
    margin-top: 1rem;
    width: 250px;
    height: 35px;
    border: 1px solid #f1f1f1;
    background: #f1f1f1;
    border-radius: 5px;
    outline: none;
    text-indent: 10px;
}
img{
    height: 25px;
    width: 20px;
    opacity: 0.5;
    position: absolute;
    margin-top: 1.4rem;
    margin-left: -1.5rem;
}
`
const BtnSubmit = styled.button`
position: relative;
width: 120px;
height: 30px;
background-color: rgba(254, 97, 3, 0.2);
color:  #000;
outline: none;
border: 0px solid #808080;
font-family: Montserrat;
font-weight: 400;
font-size: 16px;
border-radius: 10px;
cursor: pointer;
margin-left: 0rem;
margin-top: 1rem;

`

const Password = () => {
  return (
    <Block>
        <Head>
            Сменить пароль
        </Head>
        <PassBlock>
            <Name>
                Пароль
            </Name>
            <input type="text" size="0" /><img src='https://svgshare.com/i/iKc.svg' title='lock' />
        </PassBlock>
        <BtnSubmit>
            <span>Сменить</span>
        </BtnSubmit>
    </Block>
  )
}

export default Password