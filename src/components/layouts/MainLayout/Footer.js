import React from 'react'
import img from '../../../assets/footerlogo.png'
import styled from 'styled-components'



const Section = styled.footer`
min-height: 0vh;
height: 300px;
width: 100%;
color: #000;
background-color: rgba(234, 226, 218, 0.6);
flex-shrink: 0;
margin-top: 55rem;
`
const Container = styled.div`
max-width: 75%;
display: flex;
justify-content: flex-start;
align-items: center;
margin: 1rem auto;
margin-top: 5rem;
position: relative;
`
const LogoCont = styled.div`
margin-top:0rem;
justify-content: flex-start;
align-items: center;
position: absolute;
img{
    width: 300px;
    height: 130px;
    filter: saturate(90%);
}
`

const FooterText = styled.div`
display: flex;
margin-top: 5rem;
width: 100%;
line-height: 2rem;
display: grid;
grid-template-columns: 215px 250px 250px;
margin-left: 28rem;
`

const Row = styled.div`

`

const Col = styled.div`

`

const Menu = styled.ul`
list-style: none;
`

const Menuitem = styled.li`

`



const Footer = () => {
  return (
    <Section>
    <Container>
    <LogoCont>
      <img src={img} />
    </LogoCont>
    <FooterText>
    <Row>
      <Col>
      <h4>Вопросы и ответы</h4>
      <Menu>
        <Menuitem>Контакты</Menuitem>
      </Menu>
      </Col>
    </Row>
    <Row>
      <Col>
      <h4>Правовая информация</h4>
      <Menu>
        <Menuitem>Конфединциальность</Menuitem>
        <Menuitem>Условия и положения</Menuitem>
      </Menu>
      </Col>
    </Row>
    <Row>
      <Col>
      <h4>О нас</h4>
      <Menu>
        <Menuitem>Правила и рекомендации</Menuitem>
        <Menuitem>Онлайн шоу</Menuitem>
        <Menuitem>Мастера</Menuitem>
      </Menu>
      </Col>
    </Row>
    </FooterText>
    </Container>
  </Section>
  )
}

export default Footer