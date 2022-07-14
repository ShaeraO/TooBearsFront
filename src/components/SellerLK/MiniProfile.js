import React from 'react'
import styled from 'styled-components'
import img from '../assets/cardPhoto.png'
import img2 from '../assets/arrow.png'

const Section = styled.section`
width: 210px;
height: 40px;
`

const Text = styled.div`
margin: -1.6rem 2rem;

`

const PhotoCont = styled.div`
width: 30px;
height: 30px;
margin-top: 0.4rem;

img{
    width: 28px;
    height: 28px;
}
`

const IconCont = styled.div`
display: flex;
justify-content: flex-end;
margin: 0.5rem 1rem;

img{
    width: 18px;
    height: 18px;
}
`

const MiniProfile = () => {
  return (
    <Section>
        <PhotoCont>
            <img src={img} alt="miniprofile" />
        </PhotoCont>
        <Text>Funny Teddy Toys</Text>
        <IconCont>
            <img src={img2} alt="arrow" />
        </IconCont>
    </Section>
  )
}

export default MiniProfile