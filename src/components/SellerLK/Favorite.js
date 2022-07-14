import React from 'react'
import styled from 'styled-components'
import CardBlock from './Favorite/CardBlock'

const Block = styled.section`
position: relative;
top: 3rem;
left: 30rem;
width: 790px;
height: 810px;

`

const Head = styled.div`
font-weight: 400;
font-size: 26px;
display: flex;
margin-top: 3rem;
padding-bottom: 10px;
border-bottom: 1px solid rgba(148, 148, 148, 0.5) ;
font-family: 'Palatino';

img{
    width: 20px;
    position: relative;
    opacity: 0.8;
    top: 2px;
    left: 10px;
}
`

const Favorite = () => {
  return (
    <Block>
    <Head>
        Мне нравится<img src="https://svgshare.com/i/iDW.svg" alt='heart' />
    </Head>
    <CardBlock />
    </Block>
  )
}

export default Favorite