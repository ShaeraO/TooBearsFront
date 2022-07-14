import React from 'react'
import styled from 'styled-components'
import img from '../assets/cardPhoto.png'
import img2 from '../assets/arrow.png'

const Section = styled.section`
width: 210px;
height: 40px;
`

const Text = styled.div`
margin: -2rem 7rem;

`

const PhotoCont = styled.div`
width: 30px;
height: 30px;
margin: 0.4rem 5rem;

img{
    width: 28px;
    height: 28px;
}
`

const IconCont = styled.div`
display: flex;
justify-content: flex-end;
margin: 0.9rem 1rem;

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
        <Text>Oksana</Text>
        <IconCont>
            <img src={img2} alt="arrow" />
        </IconCont>
    </Section>
  )
}

export default MiniProfile