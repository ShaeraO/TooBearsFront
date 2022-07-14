import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ButtonSave from '../components/Settings/ButtonSave'
import FirstInfo from '../components/Settings/FirstInfo'
import Notify from '../components/Settings/Notify'
import Password from '../components/Settings/Password'
import SecondInfo from '../components/Settings/SecondInfo'

const Block = styled.section`
position: relative;
bottom: 25rem;
left: 34rem;
width: 790px;
height: 810px;

`

const Btn = styled.button`
position: relative;
width: 120px;
height: 30px;
background-color: #f1f1f1;
color:  #000;
outline: none;
border: 0px solid #808080;
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
border-radius: 10px;
cursor: pointer;
left: 22rem;
top: 0rem;

`
const InfoBlock = styled.div`
margin-top: 3rem;
`

const Settings = () => {
  return (
    <Block>
        <Link to="/"><Btn>
            <span>Назад</span>
        </Btn></Link>
        <InfoBlock>
        <FirstInfo />
        <SecondInfo />
        <Notify />
        <Password />
        </InfoBlock>
        <ButtonSave />
    </Block>
  )
}

export default Settings