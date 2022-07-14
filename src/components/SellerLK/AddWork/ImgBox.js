import React from 'react'
import styled from 'styled-components'
import img from '../../../assets/camera.png'

const Section = styled.section`
width: 220px;
height: 270px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
border: 2px dashed rgba(57, 105, 176, 0.33);
border-radius: 20px;
justify-content: center;
align-items: center;
margin-top: 2rem;
background: rgba(57, 105, 176, 0.15);
`
const ImgCont = styled.div`
img{
    width: 66px;
    height: 63px;
}
`


const TextHead = styled.div`
position: relative;
font-size: 14px;
font-weight: 500;
`
const TextDesc = styled.div`
text-align: center;
font-size: 11px;
`

const ImgBox = () => {
  return (
    <Section>
        <ImgCont>
        <img src={img} alt='camera' />
        </ImgCont>
        <TextHead>
            Заглавное фото
        </TextHead>
        <TextDesc>
            Нажмите, чтобы добавить фотографию
        </TextDesc>
    </Section>
  )
}

export default ImgBox