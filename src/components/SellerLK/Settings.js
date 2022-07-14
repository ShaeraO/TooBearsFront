import React from 'react'
import Password from './Settings/Password'
import Notify from './Settings/Notify'
import styled from 'styled-components'
import FirstParams from './Settings/FirstParams'
import ButtonSave from './Settings/ButtonSave'


const Section = styled.section`
position: relative;
bottom: 0rem;
left: 34rem;
width: 790px;
height: 810px;

`

const Settings = () => {
  return (
    <>
    <Section>
      <FirstParams />
      <Notify />
      <Password />
      <ButtonSave />
    </Section>
    </>
  )
}

export default Settings