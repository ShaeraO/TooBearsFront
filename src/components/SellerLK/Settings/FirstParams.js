import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
border-bottom: 1px solid rgba(148, 148, 148, 0.5);
height: 1000px;
margin: 10rem -4rem;
width: 800px;
`

const FormBlock = styled.div`
margin-top: 1rem;
position: relative;
padding-bottom: 1rem;
padding-top: 0rem;
width: 500px;
input{
    margin-top: 1rem;
    width: 410px;
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
const SubName = styled.h5`
margin-top: 0.5rem;
font-size: 14px;
font-weight: 400;
opacity: 0.8;
`
const Country = styled.div`
margin: 1rem -2rem;
display: flex;

select{
    margin-top: 5px;
    font-family: 'Montserrat';
    width: 277px;
    height: 35px;
    border: 1px solid #949494;
    border-radius: 5px;
    outline: none;
    font-size: 17px;
}
`
const CountryBlock = styled.div`
margin-left: 2rem;

`

const Checkboxes = styled.div`
margin-top: 1rem;

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
const TextArea = styled.div`
margin-top: 2rem;
`
const Hint = styled.h5`
width: 300px;
position: relative;
margin: 1rem 1rem;
font-weight: 500;
font-size: 12px;
opacity: 0.7;
`

const Desc = styled.div`
margin-top: 0.5rem;
box-sizing: border-box;
textarea{
  font-family: 'Montserrat';
  width: 462px;
  height: 130px;
  border: 1px solid #949494;
  border-radius: 10px;
  outline: none;
  resize: none;
  padding: 5px 5px;
}
`
const Area = styled.div`
display: flex;
`

const Form = ({name = " ", subname = " "}) => {
  return(
      <FormBlock>
          <Name>{name}</Name>
          <input type="text" size="0" />
          <SubName>{subname}</SubName>
      </FormBlock>
  )
}

const TextBlock = ({name = " ", hint = " "}) =>{
  return(
    <TextArea>
      <Name>{name}</Name>
      <Area>
        <Desc>
        <textarea></textarea>
        </Desc>
        <Hint>{hint}</Hint>
      </Area>
    </TextArea>
  )
}

const FirstParams = () => {
  return (
    <>
    <Section>
      <Form name="Название магазина" subname="Например, Collectible bears или Teddy by Oksana Ivanova" />
      <Form name="Email" subname=" " />

      <Country>
        <CountryBlock>
          <Name>
              Выберите страну
          </Name>
          <select>
              <option>Россия</option>
              <option>Казахстан</option>
              <option>Беларусь</option>
              <option>Сербия</option>
              <option>Китай</option>
              <option>Сша</option>
          </select>
        </CountryBlock>
        <CountryBlock>
          <Name>
              Цены проданных работ
          </Name>
          <select>
              <option>Показать</option>
              <option>Скрыть</option>
          </select>
        </CountryBlock>
      </Country>
      <Checkboxes>
        <Check>
            <input type="checkbox" id='check2' name='check2'/>
            <label for='check2'>Мои работы могут покупать только зарегистрированные пользователи</label>
        </Check>
    </Checkboxes>
    <TextBlock name="Условия доставки" hint="Сколько времени обычно занимает доставка, и в какие страны посылка может идти дольше? В какие стараны вы не отправляете?" />
    <TextBlock name="Условия оплаты" hint="Оставьте это поле пустым для стандартного текста от Toobears или напиши свои условия и методы платежей." />
    <TextBlock name="Условия возврата" hint="Предоставляете ли вы возврат работ?" />
    </Section>
    </>
  )
}

export default FirstParams