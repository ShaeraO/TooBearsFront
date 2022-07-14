import React from 'react'
import styled from 'styled-components'
import SwitchContent from './SwitchContent'
import img from '../../assets/banner1.png'
import Pagination from './Pagination'

const Section = styled.section`
width: 75%;
margin: 2rem auto;

`

const MarketPart = styled.div`
margin-top: 5rem;
display: grid;
place-items: center;
grid-template-columns: 20% 20% 20% 20%;
grid-template-rows: 405px 310px;
grid-gap: 66px;
margin-left: 1.5rem;
`

const Name = styled.h2`
font-weight: 600;
font-size: 13pt;
justify-content: flex-start;
text-transform: capitalize;
color: #917272;
margin-top: 10%;
`

const Seller = styled.h2`
font-size: 11pt;
font-weight: 500;
opacity: 0.7;
margin-top: 3px;
`

const Size = styled.h2`
font-size: 12pt;
margin-top: 1.2rem;
text-transform: capitalize;
font-weight: 500;
opacity: 0.7;
width: 80px;
display: flex;
justify-content: flex-end;
`

const Price = styled.h2`
font-size: 14pt;
font-weight: 500;
color: #917272;
width: 80px;
display: flex;
justify-content: flex-end;
margin: 0px 3px;
`

const Item = styled.div`
height: 405px;
width: 270px;
border-radius: 10px;
border: 1px solid rgba(145, 114, 114, 0.2);

`

const ImgCont = styled.div`
width: 245px;
height: 305px;
display: flex;
align-items: center;
margin: 1.7rem 0.8rem;
img{
  width: 254px;
  height: 340px;
  border-radius: 5px
}

`

const TextCont = styled.div`
display: grid;
grid-template-columns: 165px 20px;
margin: -1.2rem 0.8rem;

`

const MarketCard = ({ img, name=" ", size=" ", seller=" ", price=" " }) => {
  return(
  <Item>
    <ImgCont>
      <img src={img} alt={name} />
    </ImgCont>
    <TextCont>
      <Name>{name}</Name>
      <Size>{size}</Size>
      <Seller>{seller}</Seller>
      <Price>{price}</Price>
    </TextCont>
  </Item>
  
  )
}

const Market = () => {
  return (
    <Section>
      <SwitchContent />
      <MarketPart>
        <MarketCard img={img} name="Fedya Bear" seller="Funny Teddy Toys" size="15cm" price="139.00 $"/>
        <MarketCard img={img} name="Fedya Bear" seller="Funny Teddy Toys" size="15cm" price="139.00 $"/>
        <MarketCard img={img} name="Fedya Bear" seller="Funny Teddy Toys" size="15cm" price="139.00 $"/>
        <MarketCard img={img} name="Fedya Bear" seller="Funny Teddy Toys" size="15cm" price="139.00 $"/>
        <MarketCard img={img} name="Fedya Bear" seller="Funny Teddy Toys" size="15cm" price="139.00 $"/>
        <MarketCard img={img} name="Fedya Bear" seller="Funny Teddy Toys" size="15cm" price="139.00 $"/>
        <MarketCard img={img} name="Fedya Bear" seller="Funny Teddy Toys" size="15cm" price="139.00 $"/>
        <MarketCard img={img} name="Fedya Bear" seller="Funny Teddy Toys" size="15cm" price="139.00 $"/>
        <MarketCard img={img} name="Fedya Bear" seller="Funny Teddy Toys" size="15cm" price="139.00 $"/>
        <MarketCard img={img} name="Fedya Bear" seller="Funny Teddy Toys" size="15cm" price="139.00 $"/>
        <MarketCard img={img} name="Fedya Bear" seller="Funny Teddy Toys" size="15cm" price="139.00 $"/>
        <MarketCard img={img} name="Fedya Bear" seller="Funny Teddy Toys" size="15cm" price="139.00 $"/>
      </MarketPart>
      <Pagination />
    </Section>
  )
}

export default Market