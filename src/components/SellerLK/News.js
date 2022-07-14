import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
position: relative;
margin-left: -4rem;
`

const Description = styled.section`
position: relative;
height: 250px;
width: 705px;
margin: 6rem 34rem;
`

const Head = styled.h2`
font-family: 'Palatino';
font-weight: 400;
border-bottom: 0.5px solid rgba(215, 215, 215, 1);
line-height: 35px;
`
const NewsBlock = styled.div`
width: 705px;
height: 536px;
margin: -17rem 34rem;
padding-bottom: 16rem;
`

const Post = styled.div`
width: 747px;
height: 160px;
padding: -1rem 0rem;

`
const PostText = styled.div`
width: 422px;


`

const PostHead = styled.div`
font-size: 19px;
font-weight: 400;
`
const PostDate = styled.div`
font-size: 11px;
margin-top: 0px;
line-height: 40px;
`
const PostDesc = styled.div`
font-size: 14px;
line-height: 15px;
margin-top: -5px;
`

const PostImg = styled.div`
width: 234px;
height: 118px;
background: #DADADA;
margin: -7.5rem 29.5rem;
`
const News = () => {
  return (
    <Section>
        <Description>
            <Head>Новости</Head>
        </Description>
        <NewsBlock>
            <Post>
                <PostText>
                <PostHead>Заголовок новости 1</PostHead>
                <PostDate>25 Мая</PostDate>
                <PostDesc>Мы добавили шесть новых дизайнов купонов специально к Хэллоуину. Загляните в раздел "Маркетинг" - "Скидочные купоны" чтобы создать ваш скидочный купон специально к Хэллоуину!</PostDesc>
                </PostText>
                <PostImg></PostImg>
            </Post>
            <Post>
                <PostText>
                <PostHead>Заголовок новости 1</PostHead>
                <PostDate>25 Мая</PostDate>
                <PostDesc>Мы добавили шесть новых дизайнов купонов специально к Хэллоуину. Загляните в раздел "Маркетинг" - "Скидочные купоны" чтобы создать ваш скидочный купон специально к Хэллоуину!</PostDesc>
                </PostText>
                <PostImg></PostImg>
            </Post>
            <Post>
                <PostText>
                <PostHead>Заголовок новости 1</PostHead>
                <PostDate>25 Мая</PostDate>
                <PostDesc>Мы добавили шесть новых дизайнов купонов специально к Хэллоуину. Загляните в раздел "Маркетинг" - "Скидочные купоны" чтобы создать ваш скидочный купон специально к Хэллоуину!</PostDesc>
                </PostText>
                <PostImg></PostImg>
            </Post>
        </NewsBlock>
    </Section>
  )
}

export default News