import React from 'react'
import styled from 'styled-components'
import FormBox from './FormBox'
import ImgBox from './ImgBox'
import FormDesc from './FormDesc'
import Destination from './Destination'
import HashTag from './HashTag'
import ButtonSave from './ButtonSave'

const Section = styled.section`
width: 610px;
height: 1600px;
position: relative;
top: 6rem;
left: 30rem;
`

const Head = styled.div`
width: 610px;
padding-bottom: 10px;
border-bottom: 1px solid rgba(148, 148, 148, 0.5) ;
font-family: 'Palatino';
font-weight: 400;
font-size: 26px;
`

const AddImg = () => {
  return (
    <Section>
        <Head>
            Добавить работу
        </Head>
        <ImgBox />
        <FormBox />
        <FormDesc />
        <Destination />
        <HashTag />
        <ButtonSave />
    </Section>
  )
}

export default AddImg