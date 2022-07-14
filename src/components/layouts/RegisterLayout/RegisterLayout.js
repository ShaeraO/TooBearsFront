import React from 'react'
import styled from 'styled-components'
import RegisterNav from '../../Register/RegisterNav'
import { Routes, Route} from 'react-router-dom'
import RegisterBlock from '../../Register/Register'
import SignIn from '../../Register/SignIn'


const Section = styled.div`
width: 435px;
height: fit-content;
box-shadow: inset 0px 5px 3px -2px rgba(0, 0, 0, 0.25);
border: 1px solid rgba(189, 169, 158, 0.8);
border-radius: 25px;
margin: 5rem auto;
`

const Register = () => {
  return (
    <Section>
      <RegisterNav />
      <main className='container'>
      <Routes>
        <Route index element={<RegisterBlock />} />
        <Route path="register" element={<RegisterBlock />} />
        <Route path="login" element={<SignIn />} />
      </Routes>
      </main>
    </Section>
  )
}

export {Register}