import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Block = styled.div`
width: 437px;
border-top: 1px solid rgba(171, 154, 144, 0.6);
height: 82px;
margin-top: 1.6rem;
margin-left: -1px;
`
const Text = styled.p`
width: 300px;
padding: 1rem 2.4rem;
font-size: 15px;
cursor: pointer;

span{
    text-decoration: underline;
}
`

const Forgot = () => {
  return (
    <Block>
        <Link to="/Forget"><Text>
          <span>Восстановить пароль</span>
        </Text></Link>
    </Block>
  )
}

export default Forgot