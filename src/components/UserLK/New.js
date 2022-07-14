import React from 'react'
import styled from 'styled-components'
import img from '../assets/banner1.png'


const Block = styled.section`
border-top: 1px solid rgba(148, 148, 148, 0.2);
position: relative;
bottom: 15rem;
left: 32rem;
width: 790px;
height: 810px;

`
const Post = styled.div`
width: 790px;
border-bottom: 1px solid rgba(148, 148, 148, 0.2);
height: 230px;
display: flex;
justify-content: center;
margin-top: .5rem;
padding-bottom: 2rem;
`
const PostNew = styled.div`
width: 790px;
border-bottom: 1px solid rgba(148, 148, 148, 0.2);
height: 500px;
display: flex;
justify-content: center;
margin-top: .5rem;
padding-bottom: 2rem;
`

const PostHead = styled.h3`
position: relative;
font-family: 'Palatino';
font-weight: 500;
font-size: 16pt;
`
const PostImg = styled.div`
position: absolute;
width: 300px;
height: 100px;
margin-top: 3rem;
border-radius: 10px;
background-color: #f5f5f5;
`

const PostText = styled.div`
width: 690px;
position: absolute;
top: 11rem;
`
const PostCard = styled.div`
height: 400px;
width: 265px;
color: #fff;
margin: 3rem -15rem;
position: absolute;
border: 1px solid rgba(145, 114, 114, 0.2);
border-radius: 10px;

`

const ImageContainer =styled.div`
width: 260px;
height: 320px;
margin: -0.1rem 0.3rem;
display: flex;
align-items: center;

cursor: pointer;

img {
  margin-top: 0.8rem;
  height: 314px;
  width: 254px;
  border-radius: 4px;
  
}
`

const Name = styled.h2`
height: 12px;
font-family: 'Montserrat', sans-serif;
font-weight: 700;
font-size: 15pt;
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: 5px;
text-transform: capitalize;
color: #917272;
margin-top: 2rem;
`
const Size = styled.h2`
font-size: 12pt;
display: flex;
align-items: center;
justify-content: flex-end;
max-width: 90%;
text-transform: capitalize;
color: #000;
font-weight: 600;
margin-top: -3.8rem;
margin-left: 20px;
opacity: 0.7;
`
const Price = styled.h2`
font-size: 14pt;
display: flex;
align-items: center;
justify-content: flex-end;
max-width: 90%;
text-transform: uppercase;
color: #917272;
font-weight: 600;
margin-top: 1.2rem;
margin-left: 20px;
`
const Country = styled.h2`
font-family: 'Montserrat';
font-size: 12pt;
font-weight: 300;
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: 5px;
text-transform: capitalize;
color: #000;
font-weight: 600;
margin-top: 0.2rem;
opacity: 0.7;
`
const Seller = styled.h2`
font-size: 12pt;
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: 5px;
text-transform: capitalize;
color: #000;
font-weight: 600;
margin-top: 0.4rem;
opacity: 0.7;
`
const TextContainer = styled.div`
margin-top: -20px;
`

const Btn = styled.button`
position: absolute;
width: 146px;
height: 30px;
background-color: rgba(254, 97, 3, 0.2);
color:  #000;
outline: none;
border: 0px solid #808080;
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
border-radius: 10px;
cursor: pointer;
margin-left: 0rem;
bottom: 2rem;

`
const Date = styled.div`
margin: 0.5rem 0rem;
font-size: 13px;
font-weight: 500;
position: absolute;
bottom: 0;
opacity: 0.5;
`
const DateFirst = styled.div`
margin: 0.5rem 0rem;
font-size: 13px;
font-weight: 500;
position: absolute;
top: 15rem;
left: 0;
opacity: 0.5;
`

const New = () => {
  return (
    <Block>
        <Post>
            <PostHead>Заголовок Новости 1</PostHead>
            <PostImg></PostImg>
            <PostText>Мы добавили шесть новых дизайнов купонов специально к Хэллоуину. Загляните в раздел "Маркетинг" - "Скидочные купоны" чтобы создать ваш скидочный купон специально к Хэллоуину!</PostText>
            <DateFirst>25 мая</DateFirst>
        </Post>
        <Date>25 мая</Date>
        <PostNew>
            <PostHead>Новая работа от Natasha Murasha</PostHead>
            <PostCard>
            <ImageContainer>
                <img src={img} alt='img' />
        
            </ImageContainer>
            <TextContainer>
            <Name>Fedya Bear</Name>
            <Seller>Funny Teddy Toys</Seller>
            <Country>Russia</Country><Size>15 cm</Size>
            <Price>139.00$</Price>
            </TextContainer>
            </PostCard>
            <Btn>
                <span>Посмотреть</span>
            </Btn>
        </PostNew>
    </Block>
  )
}

export default New