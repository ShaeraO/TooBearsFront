import React from 'react'
import styled from 'styled-components'
import ButtonAll from './ButtonAll'
import ButtonSold from './ButtonSold'
import CardBlock from './CardBlock'
import Order from './Order'

const Section = styled.section`
width: 1000px;
position: relative;
top: 3rem;
left: 30rem;
`


const SoldBlock = () => {
  return (
    <Section>
        <ButtonAll />
        <ButtonSold />
        <Order />
        <CardBlock />
    </Section>
  )
}

export default SoldBlock