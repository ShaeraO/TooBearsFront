import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/banner1.png';

const Card = styled.section`
height: 470px;
width: 970px;
margin: -12rem 34rem;
display: grid;
grid-template-columns: 240px 240px 240px 240px;
grid-gap: 1px;
`
const CardComp = styled.div`
height: 342px;
width: 225px;
border: 1px solid rgba(171, 154, 144, 0.3);
border-radius: 10px;
margin: 0.5rem -0.2rem;
`
const ImageContainer = styled.div`

img{
    height: 269px;
    width: 214px;
    margin: 0.2rem 0.35rem;
    border-radius: 4px;
}
`
const Name = styled.div`
font-family: 'Montserrat';
font-weight: bold;
font-size: 12pt;
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: 5px;
text-transform: capitalize;
color: #917272;
margin-top: 0.5rem;
`
const Seller = styled.div`
font-size: 12px;
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: 5px;
text-transform: uppercasnpme;
color: #000;
font-weight: 600;
margin-top: 0.1rem;
opacity: 0.7;
`
const Country = styled.div`
font-size: 12px;
font-weight: 600;
margin-left: 5px;
opacity: 0.7;
`
const Size = styled.div`
font-size: 12px;
position: absolute;
font-weight: 600;
align-items: center;
justify-content: flex-end;
margin-left: 11.8rem;
margin-top: -3rem;
opacity: 0.7;
`
const Status = styled.div`
position: absolute;
font-weight: 600;
align-items: center;
justify-content: flex-end;
margin-top: -1.1rem;
margin-left: 7.5rem;
color: #917272;
display: flex;
width: 100px;
justify-content: flex-end;
`
const TextContainer = styled.div`
margin-top: -0.5rem;
`

const CardGrid = ({img, name=" ", size=" ", country=" ",status=" ", seller=" "}) => {
    return(
        <CardComp>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
            <TextContainer>
            <Name>{name}</Name>
            <Seller>{seller}</Seller>
            <Country>{country}</Country>
            <Size>{size}</Size>
            <Status>{status}</Status>
            </TextContainer>
        </CardComp>
    )
}


const CardBlock = () => {
  return (
    <Card>
        <CardGrid img={img1} name="Fedya Bear" seller='Funny Teddy Toys' country='Russia' size="15cm" status="резерв" />
        <CardGrid img={img1} name="Fedya Bear" seller='Funny Teddy Toys' country='Russia' size="15cm" status="продано" />
        <CardGrid img={img1} name="Fedya Bear" seller='Funny Teddy Toys' country='Russia' size="15cm" status="139.00 $" />
    </Card>
  )
}

export default CardBlock