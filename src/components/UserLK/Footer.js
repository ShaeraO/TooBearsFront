import React from 'react'
import styled from 'styled-components'
import img from '../assets/footerlogo.png'


const Section = styled.footer`
min-height: 40vh;
height: 40vh;
width: 100%;
position: absolute;
color: #000;
background-color: rgba(234, 226, 218, 0.6);
display: flex;
overflow-x: hidden;
margin-top: 60rem;
`

const Container = styled.div`
max-width: 50%;
margin: 2rem 14rem;
display: flex;
justify-content: center;
align-items: center;
`
const LogoCont = styled.div`
position: absolute;
width: 100px;
height: 100px;
margin-top: 4rem;
justify-content: flex-start;
align-items: center;
left: 12.5rem;
margin-top: -1.5rem;

img{
  width: 200px;
  height: 66px;
  filter: saturate(80%);
}
`
const Row = styled.div`
flex-wrap: wrap;
display: flex;
`
const Col = styled.div`
  width: 25%;
  padding: 0 15px;
`
const Menu = styled.ul`
  list-style-type: none;
`
const Menuitem = styled.li`

`

const FooterText = styled.div`
display: flex;
position: absolute;
width: 50%;
display: grid;
place-items: top;
grid-template-columns: 50px 100px 100px;
grid-template-rows: 5fr;
gap: 9rem;
white-space: nowrap;
right: 6.10rem;
line-height: 2rem;
text-align: center;
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