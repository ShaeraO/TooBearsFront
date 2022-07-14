import React from 'react'
import styled from 'styled-components'
import img2 from '../../assets/banner1.png'
const Section = styled.section`
margin-left: -4rem;
`

const Description = styled.section`
position: relative;
height: 250px;
width: 705px;
margin-left: 34rem;
`

const Head = styled.h2`
font-family: 'Palatino';
font-weight: 400;
border-bottom: 0.5px solid rgba(215, 215, 215, 1);
line-height: 35px;

img{
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-bottom: -3px;
}
`
const ActivityBlock = styled.div`
margin-left: 34rem;
height: 290px;
width: 530px;
overflow-y: scroll;
position: relative;
margin-top: -11rem;


`

const Page = styled.div`
width: 500px;
height: fit-content;
border-bottom: 0.5px solid rgba(215, 215, 215, 1);
padding-top: 0.1rem;
margin-top: 5px;
line-height: 25px;

&:last-child{
    border-bottom: 0;
}
`

const PageDesc = styled.div`
font-size: 16px;
`

const PageDate = styled.div`
font-size: 13px;
`


const PageDescImg = styled.div`
padding-top: 1rem;
padding-bottom: 1.5rem;

.Desc{
    margin-left: 5rem;
    margin-top: -4.5rem
}
.Date{
    margin-left: 5rem;
}
img{
    width: 60px;
    height: 69px;
    border-radius: 15px;
    margin-top: -5px;
    padding-bottom: 5px ;
}
`
const ActivityText = () => {
  return (
    <Section>
    <Description>
    <Head>Активность <img src="https://svgshare.com/i/iCa.svg" alt='bell' /></Head>
    </Description>
    <ActivityBlock>
        <Page>
            <PageDesc>Lindsey Banay ваш новый подписчик</PageDesc>
            <PageDate>25 мая</PageDate>
        </Page>
        <Page>
            <PageDescImg><img src={img2} alt='user' />
            <PageDesc className='Desc'>
                Вы добавили работу Darya
            </PageDesc>
            <PageDate className='Date'>25 мая</PageDate>
            </PageDescImg>
        </Page>
        <Page>
            <PageDesc>У вас новое сообщение от Lindsey Banay</PageDesc>
            <PageDate>25 мая</PageDate>
        </Page>
        <Page>
            <PageDesc>Новый заказ на Matthew</PageDesc>
            <PageDate>25 мая</PageDate>
        </Page>
        <Page>
            <PageDesc>Добро пожаловать здесь будет ваша активность</PageDesc>
            <PageDate>25 мая</PageDate>
        </Page>
    </ActivityBlock>
    </Section>
  )
}

export default ActivityText