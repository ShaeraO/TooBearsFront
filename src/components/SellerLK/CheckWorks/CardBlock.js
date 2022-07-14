import React from 'react'
import styled from 'styled-components'
import img from '../../../assets/banner1.png'

const Section = styled.section`
width: 900px;
display: grid;
grid-template-columns: 220px 220px 220px 220px;
margin-top: -4rem;
`
const WorkItem = styled.div`
height: 300px;
width: 200px;
border: 1px solid rgba(171, 154, 144, 0.3);
border-radius: 10px;
margin: 0.5rem -0.2rem;
`
const ImgCont = styled.div`

img{
    height: 240px;
    width: 190px;
    margin: 0.4rem 0.3rem;
    border-radius: 4px;
}
`
const TextCont = styled.div`
margin-top: -0.5rem;
`
const Name = styled.div`
font-family: 'Montserrat';
font-weight: bold;
font-size: 12pt;
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: 7px;
text-transform: capitalize;
color: #917272;
margin-top: 0;

`

const Likes = styled.div`
margin: 5px 7px;
opacity: 0.8;

span{
margin-bottom: -12px;
opacity: 0.55;
font-size: 19px;
}
`

const Status = styled.div`
position: absolute;
font-weight: 600;
align-items: center;
justify-content: flex-end;
margin-top: 0.5rem;
margin-left: 6rem;
color: #917272;
display: flex;
width: 100px;
justify-content: flex-end;

`

const CardBlock = () => {
  return (
    <Section>
        <WorkItem>
            <ImgCont>
                <img src={img} alt='card' />
            </ImgCont>
            <TextCont>
                <Name>Fedya Bear</Name>
                <Status>резерв</Status>
                <Likes><span>&#10084;</span> 12</Likes> 
            </TextCont>
        </WorkItem>
        <WorkItem>
            <ImgCont>
                <img src={img} alt='card' />
            </ImgCont>
            <TextCont>
                <Name>Fedya Bear</Name>
                <Status>продано</Status>
                <Likes><span>&#10084;</span> 12</Likes> 
            </TextCont>
        </WorkItem>
        <WorkItem>
            <ImgCont>
                <img src={img} alt='card' />
            </ImgCont>
            <TextCont>
                <Name>Fedya Bear</Name>
                <Status>резерв</Status>
                <Likes><span>&#10084;</span> 12</Likes> 
            </TextCont>
        </WorkItem>
        <WorkItem>
            <ImgCont>
                <img src={img} alt='card' />
            </ImgCont>
            <TextCont>
                <Name>Fedya Bear</Name>
                <Status>продано</Status>
                <Likes><span>&#10084;</span> 12</Likes> 
            </TextCont>
        </WorkItem>
    </Section>
  )
}

export default CardBlock