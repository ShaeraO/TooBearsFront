import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
width: 800px;
height: 220px;
border-bottom: 1px solid rgba(148, 148, 148, 0.5);
margin: -9rem -4rem;
`

const Head = styled.div`
font-weight: 400;
font-size: 18px;

margin-top: 3rem;
`
const Language = styled.div`
margin-top: 1rem;

select{
    margin-top: 5px;
    font-family: 'Montserrat';
    width: 277px;
    height: 35px;
    border: 1px solid #949494;
    border-radius: 5px;
    outline: none;
    font-size: 17px;
}
`
const Name = styled.div`
font-size: 15px;
font-weight: 500;
`
const Subname = styled.h5`
margin-top: 5px;
font-size: 12px;
font-weight: 400;
`

const Checkboxes = styled.div`
margin-top: 1rem;

`
const Check = styled.div`
margin-top: 1rem;

input{
    position: absolute;
    z-index: -1;
    opacity: 0;
}
input+label{
    display: inline-flex;
    align-items: center;
    user-select: none;
}
input+label::before{
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #949494;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
}
input:not(:disabled):not(:checked)+label:hover::before {
    border-color: rgba(254, 97, 3, 0.2);
}
input:not(:disabled):active+label::before{
    background-color: #EAE2DA;
    border-color: #EAE2DA;
}
input:focus:not(:checked)+label::before{
    border-color: #EAE2DA;
}
input:checked+label::before{
    border-color: #949494;
    background-color: rgba(254, 97, 3, 0.2);
    background-image: url(https://svgshare.com/i/iBL.svg);
}
input:disabled+label::before{
    background-color: rgba(254, 97, 3, 0.2);
}
`

const Notify = () => {
  return (
    <>
    <Block>
    <Head>
        Уведомления по почте
    </Head>
    <Language>
        <Name>
            Выбрать язык
        </Name>
        <select>
            <option>Русский</option>
            <option>English</option>
        </select>
        <Subname>предпочитаемый язык для Email</Subname>
    </Language>
    <Checkboxes>
        <Check>
            <input type="checkbox" id='check' name='check'/>
            <label for='check'>Получать письма о новых работах авторов, на которых вы подписаны</label>
        </Check>
        <Check>
            <input type="checkbox" id='check2' name='check2'/>
            <label for='check2'>Получать новости и анонсы Toobears</label>
        </Check>
    </Checkboxes>
    </Block>
    </>
  )
}

export default Notify