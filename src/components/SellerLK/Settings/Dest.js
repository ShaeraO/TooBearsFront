import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
width: 800px;
margin-top: 2rem;
`
const HeadDest = styled.div`
font-size: 19px;
font-weight: 500;
`
const PriceDest = styled.div`
height: 187px;
width: 282px;
margin-top: 1rem;
display: flex;
flex-direction: column;

input{
  margin-top: 1rem;
  width: 260px;
  height: 35px;
  border: 1px solid #949494;
  border-radius: 10px;
  outline: none;
  text-indent: 5px;
}

.second{
    width: 200px
}
`
const PriceHead = styled.div`
font-size: 17px;
font-weight: 400;
`
const PriceDesc = styled.div`
margin-top: 10px;
font-size: 13px;
font-weight: 400;
opacity: 0.8;
`

const InputBlock = styled.div`
display: grid;
grid-template-columns: 315px 220px 50px;
`
const Trash = styled.div`
margin-top: 5.7rem;
img{
    width: 20px;
    height: 20px;
    margin-top: 1.7rem;
    margin-right: 10px;
    opacity: 0.5;
}
`
const Btn = styled.button`
margin-top: 1rem;
width: 263px;
height: 35px;
background: #F5F5F5;
border: 1px solid #949494;
border-radius: 10px;
font-family: 'Montserrat';
`
const Check = styled.div`
margin-top: 1rem;

input{
    position: absolute;
    z-index: -1;
    opacity: 0;
}
input+label{
    display: inline-flex;
    align-items: center;
    user-select: none;
}
input+label::before{
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #949494;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
}
input:not(:disabled):not(:checked)+label:hover::before {
    border-color: rgba(254, 97, 3, 0.2);
}
input:not(:disabled):active+label::before{
    background-color: #EAE2DA;
    border-color: #EAE2DA;
}
input:focus:not(:checked)+label::before{
    border-color: #EAE2DA;
}
input:checked+label::before{
    border-color: #949494;
    background-color: rgba(254, 97, 3, 0.2);
    background-image: url(https://svgshare.com/i/iBL.svg);
}
input:disabled+label::before{
    background-color: rgba(254, 97, 3, 0.2);
}
`

const Dest = () => {
  return (
    <Section>
        <HeadDest>
            Стоимость доставки по странам
        </HeadDest>
        <InputBlock>
        <PriceDest>
            <PriceHead>
                Страна назначения
            </PriceHead>
            <PriceDesc>
                Добавьте страну назначения или напишите Worldwide для доставки по всему миру
            </PriceDesc>
            <input type="text" size="2"/>
            <input type="text" size="2"/>
        </PriceDest>
        <PriceDest>
            <PriceHead>
                Стоимость доставки
            </PriceHead>
            <PriceDesc>
                Введите ноль для бесплатной<br />доставки
                <br />
                <br />

            </PriceDesc>
            <input type="text" size="1" className="second" />
            <input type="text" size="1" className="second"/>
        </PriceDest>
        <Trash>
        <img src="https://svgshare.com/i/iEC.svg" alt="trash" />
        <img src="https://svgshare.com/i/iEC.svg" alt="trash" />
        </Trash>
        </InputBlock>
        <Btn>
            Добавить страну
        </Btn>
    </Section>
  )
}

export default Dest