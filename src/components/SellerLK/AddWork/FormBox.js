import React from 'react'
import styled from 'styled-components'
import FormAttributes from './FormAttributes'

const Section = styled.section`
margin-top: 2rem;
`

const HeadName = styled.div`
font-size: 19px;
font-weight: 500;

`
const FormName = styled.div`
margin-top: 0.5rem;
input{
  width: 562px;
  height: 35px;
  border: 1px solid #949494;
  border-radius: 10px;
  outline: none;
  text-indent: 5px;
}
`

const FormBox = () => {
  return (
    <Section>
        <HeadName>
            Название работы (на английском)
        </HeadName>
        <FormName>
            <input type="text" size="2"/>
        </FormName>
        <FormAttributes />
    </Section>
  )
}

export default FormBox