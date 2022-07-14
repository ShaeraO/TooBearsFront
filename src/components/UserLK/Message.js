
import React from 'react'
import styled from 'styled-components'

const Block = styled.section`
position: relative;
border: 1px solid rgba(148, 148, 148, 0.5);
border-radius: 10px;
bottom: 15rem;
left: 32rem;
width: 820px;
height: 448px;

`
const Messages = styled.div`
width: 592px;
height: 448px;
`
const Date = styled.h5`
margin: 0.5rem 14rem;
font-size: 13px;
font-weight: 500;
`
const UserTo = styled.div`
margin: 2rem 1rem;
width: 348px;
height: 80px;
display: flex;
`

const UserFrom = styled.div`
width: 350px;
height: fit-content;
border-radius: 20px;
position: relative;
padding: 0.5rem 0.5rem 0.8rem 1rem;
margin-left: 8rem;
background: #F5F5F5;
font-size: 15px;

span{
    color: rgba(57, 105, 176, 0.7);
    border-bottom: 1px solid;
}
`

const ImgAvatar = styled.div`
width: 55px;
height: 55px;
border: 1px solid rgba(148, 148, 148, 0.7);
border-radius: 50px;
margin-top: 2px;
background: #F5F5F5;
`

const Name = styled.h4`
position: relative;
font-size: 10pt;
margin: .5rem .5rem;
`

const MessageText = styled.div`
position: absolute;
margin: 2rem 4rem;
width: 260px;
padding: 0.5rem 0rem;
border-radius: 10px;
text-align: center;
background: #F5F5F5;

`

const Contacts = styled.div`
border-left: 1px solid rgba(148, 148, 148, 0.5);
width: 310px;
height: 448px;
position: absolute;
right: 0;
top: 0;
`

const UserProf = styled.div`
height: 80px;
width: 311px;
border-bottom: 1px solid rgba(148, 148, 148, 0.5);
display: flex;

&:first-child{
    border-radius: 0 10px 0 0 ;
    background: rgba(213, 200, 200, 0.5);
}
`
const ProfAvatar = styled.div`
width: 55px;
height: 55px;
border: 1px solid rgba(148, 148, 148, 0.7);
border-radius: 50px;
margin: 0.6rem;
background: #F5F5F5;
`
const ProfName = styled.h4`
width: 110px;
position: relative;
font-size: 9.5pt;
margin: 1rem 0rem;
`

const ProfDate = styled.h5`
margin: 1rem 2.5rem;
font-size: 13px;
font-weight: 500;
opacity: 0.7;
white-space: nowrap;
`

const MessageShort = styled.h5`
width: 200px;
position: absolute;
margin: 2.5rem 4.7rem;
font-size: 13px;
font-weight: 500;
opacity: 0.8;
`
const SendMessage = styled.div`
margin-top: .5rem;
textarea{
  font-family: 'Montserrat';
  width: 476px;
  height: 100px;
  border: 1px solid rgba(148, 148, 148, 0.5);
  border-radius: 10px;
  outline: none;
  resize: none;
  padding: 1rem 1rem;
}

`

const BtnPhoto = styled.button`
position: relative;
width: 146px;
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
margin-bottom: -3rem;

`

const BtnSend = styled.button`
position: relative;
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
margin-left: -1rem;
margin-bottom: -3rem;

`

const BtnContainer = styled.div`
margin-top: 1rem;
width: 510px;
display: flex;
justify-content: space-between;
`

const Message = () => {
  return (
    <Block>
        <Messages>
            <Date>25 Мая 2022 г.</Date>
            <UserFrom>
                Вопрос про SET 5. Teddy pattern<br />
                <span>https://irinadrozdenko.tedsby.com/131085/set-5-teddy-pattern</span>
            </UserFrom>
            <UserTo>
                <ImgAvatar></ImgAvatar>
                <Name>Alexey Ivanov</Name>
                <MessageText>Hello, yes i can make this bear</MessageText>
            </UserTo>
        </Messages>
        <Contacts>
            <UserProf>
            <ProfAvatar />
            <ProfName>Alexey Ivanov</ProfName>
            <ProfDate>25 мая</ProfDate>
            <MessageShort>Вопрос про SET 5. Te...</MessageShort>
            </UserProf>
            <UserProf>
            <ProfAvatar />
            <ProfName>Elena Torosenko</ProfName>
            <ProfDate>10 мая</ProfDate>
            <MessageShort>Вопрос про SET 5. Te...</MessageShort>
            </UserProf>
        </Contacts>
        <SendMessage>
            <textarea placeholder="Оставить сообщение..."></textarea>
            <BtnContainer>
            <BtnPhoto>
                <span>Прикрепить фото</span>
            </BtnPhoto>
            <BtnSend>
                <span>Отправить</span>
            </BtnSend>
            </BtnContainer>
        </SendMessage>
    </Block>
  )
}

export default Message