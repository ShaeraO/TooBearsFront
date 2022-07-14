import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
margin-top: 2rem;
`

const HeadName = styled.div`
font-size: 17px;
font-weight: 400;

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
const Under = styled.div`
margin-top: 0.3rem;
font-size: 15px;
font-weight: 400;
opacity: 0.6;
`

const HashTag = () => {
  return (
    <Section>
    <HeadName>
        Добавьте хэштеги описывающие вашу работу
    </HeadName>
    <FormName>
        <input type="text" size="2"/>
    </FormName>
    <Under>
        Например: miniature, teddy bear, collectible toy
    </Under>
</Section>
  )
}

export default HashTag