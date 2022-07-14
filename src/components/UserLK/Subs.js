import React from 'react'
import styled from 'styled-components'

const Block = styled.section`
border-bottom: 1px solid rgba(148, 148, 148, 0.2);
position: relative;
bottom: 15rem;
left: 32rem;
width: 790px;
height: 140px;

`

const TableHead = styled.ul`
display: grid;
grid-template-columns: 300px 490px;
list-style: none;
border-bottom:  1px solid rgba(171, 154, 144, 0.2);
font-weight: 600;
padding: 0.5rem 0;
`
const TablePm = styled.li`
opacity: 0.85;
`

const Prof = styled.div`
height: 80px;
width: 311px;
display: flex;

`

const ProfAvatar = styled.div`
width: 65px;
height: 65px;
border: 1px solid rgba(148, 148, 148, 0.7);
border-radius: 50px;
margin: 0.6rem;
background: #F5F5F5;
`
const ProfName = styled.h4`
width: 140px;
position: relative;
font-size: 9.5pt;
margin: 1rem 0rem;
`
const Short = styled.h5`
width: 200px;
position: absolute;
margin: 2.2rem 5.4rem;
font-size: 12px;
font-weight: 500;
opacity: 0.8;
`
const ButtonBlock = styled.div`
margin-left: 5.2rem;
margin-top: -1.5rem;
display: flex;
`
const BtnDesub = styled.button`
position: absolute;
width: 100px;
height: 30px;
background-color: #F5F5F5;
color:  #000;
outline: none;
border: 0px solid #808080;
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
border-radius: 10px;
cursor: pointer;
margin-left: 0rem;

`
const BtnBell = styled.button`
position: absolute;
width: 40px;
height: 30px;
background-color: #F5F5F5;
color:  #000;
outline: none;
border: 0px solid #808080;
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
border-radius: 10px;
cursor: pointer;
margin-left: 7rem;

img{
    height: 15px;
    width: 15px;
}
`
const Works = styled.div`
position: absolute;
top: 3rem;
margin-left: 18rem;
display: flex;
`

const ImgBlock = styled.div`
background-color: #f1f1f1;
border-radius: 10px;
height: 80px;
width: 75px;
margin-left: 1rem;

`

const Subs = () => {
  return (
    <Block>
        <TableHead>
            <TablePm>Имя</TablePm>
            <TablePm>Работы</TablePm>
        </TableHead>
        <Prof>
            <ProfAvatar />
            <ProfName>Funny Teddy Toys</ProfName>
            <Short>Oksana Ivanova</Short>
        </Prof>
        <ButtonBlock>
            <BtnDesub>
                <span>Отписаться</span>
            </BtnDesub>
            <BtnBell>
                <img src="https://svgshare.com/i/iCa.svg" alt='bell' />
            </BtnBell>
        </ButtonBlock>
        <Works>
            <ImgBlock></ImgBlock>
            <ImgBlock></ImgBlock>
            <ImgBlock></ImgBlock>
            <ImgBlock></ImgBlock>
            <ImgBlock></ImgBlock>
        </Works>
    </Block>
  )
}

export default Subs