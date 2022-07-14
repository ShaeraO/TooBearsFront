import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
margin-top: 2rem;
width: 700px;
`

const HeadAttributes = styled.div`
font-size: 17px;
font-weight: medium;
`
const TextAttributes = styled.div`
display: flex;
margin-top: 10px;
input{
    width: 222px;
    height: 35px;
    border-top: 1px solid #949494;
    border-bottom: 1px solid #949494;
    border-left: 1px solid #949494;
    border-right: none;
    border-radius: 10px 0 0 10px;
    outline: none;
    text-indent: 5px;
}

select {
    font-family: 'Montserrat';
    height: 37px;
    border-left: none;
    border-radius: 0 10px 10px 0;
    outline: none;
}

`
const AttributesDropDownFirst = styled.div`
display: flex;

`
const Size = styled.div`
margin-left: 1rem;
`
const Price = styled.div`

`
const AttributesDropDownSecond = styled.div`
margin-top: 1rem;
display: flex;

select{

}
`

const DropAttributes = styled.div`
margin-top: 10px;

select{
    font-family: 'Montserrat';
    width: 277px;
    height: 40px;
    border: 1px solid #949494;
    border-radius: 10px;
    outline: none;
    font-size: 17px;
}

.status{
    width: 281px;
}
`

const FormAttributes = () => {
  return (
    <Section>
        <AttributesDropDownFirst>
        <Price>
        <HeadAttributes>
            Стоимость
        </HeadAttributes>
        <TextAttributes>
            <input type="text" size="2"/>
            <select>
                <option>USD</option>
                <option>RUB</option>
                <option>EUR</option>
            </select>
        
        </TextAttributes>
        </Price>
        <Size>
        <HeadAttributes>
            Размер
        </HeadAttributes>
        <TextAttributes>
            <input type="text" size="2" className="second" />
            <select>
                <option>CM</option>
                <option>INCH</option>
            </select>
        </TextAttributes>
        </Size>
        </AttributesDropDownFirst>
        <AttributesDropDownSecond>
        <Price>
        <HeadAttributes>
            Категория
        </HeadAttributes>
        <DropAttributes>
            <select>
                <option>Выберите категорию</option>
                <option>Тедди</option>
                <option>Куклы</option>
            </select>
        
        </DropAttributes>
        </Price>
        <Size>
        <HeadAttributes>
            Cтатус
        </HeadAttributes>
        <DropAttributes>
            <select className="status">
                <option>На продажу</option>
                <option>Резерв</option>
            </select>
        </DropAttributes>
        </Size>
        </AttributesDropDownSecond>
    </Section>
  )
}

export default FormAttributes