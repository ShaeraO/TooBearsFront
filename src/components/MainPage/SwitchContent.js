import React from 'react'
import styled from 'styled-components'

import burger from '../../assets/burger.png'

const Section = styled.div`
margin: 0 auto;
border-top: 1px solid rgba(145, 114, 114, 0.2);
border-bottom: 1px solid rgba(145, 114, 114, 0.2);
height: 70px;

`

const TextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 16px 0;
`

const Text = styled.ul`
width: 280px;
list-style: none;
display: flex;
justify-content: space-between;
`

const Item = styled.li`
font-family: 'Palatino';
font-size: 28px;
opacity: 0.75;
`

const Filter = styled.div`
position: absolute;
display: flex;
margin-left: 64%;
margin-top: 5px;
font-family: 'Montserrat';
font-weight: 300;
font-size: 14px;

span {
  margin-top: 3px;
  margin-right: 10px;
}

img{
  opacity: 0.5;
  transform: scale(0.8);
}
`

const SwitchContent = () => {
  return (
    <Section>
      <TextContainer>
          <Text>
            <Item>Тедди</Item>
            <Item>Куклы</Item>
          </Text>
          <Filter>
        <span>Все фильтры
        </span>
        <img src={burger} alt="burger" />
      </Filter>
      </TextContainer>
    </Section>
  )
}

export default SwitchContent