import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
margin-top: 2rem;
`

const HeadName = styled.div`
font-size: 19px;
font-weight: 500;
`
const Desc = styled.div`
margin-top: 0.5rem;
box-sizing: border-box;
textarea{
  font-family: 'Montserrat';
  width: 562px;
  height: 250px;
  border: 1px solid #949494;
  border-radius: 10px;
  outline: none;
  resize: none;
  padding: 5px 5px;
}

`

const FormDesc = () => {
  return (
    <Section>
        <HeadName>
        Описание работы (на английском)
        </HeadName>
        <Desc>
            <textarea></textarea>
        </Desc>
    </Section>
  )
}

export default FormDesc