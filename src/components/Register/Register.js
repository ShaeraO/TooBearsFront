import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Head = styled.h5`
font-weight: 400;
font-size: 17px;
margin: 2rem 2.4rem;
`

const CheckBoxes = styled.div`
display: flex;
position: relative;
left: 1px;
padding-bottom: 1rem;
`
const Check = styled.div`
margin: -1rem 2.4rem;

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
    background-color: #f1f1f1;
    border-radius: 0.25em;
    margin-right: 0.7em;
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

const FormBlock = styled.div`
position: relative;
padding-bottom: 1rem;
padding-top: 0rem;
margin: 1rem 2.4rem;
width: 400px;
input{
    margin-top: 1rem;
    width: 350px;
    height: 35px;
    border: 1px solid #f1f1f1;
    background: #f1f1f1;
    border-radius: 5px;
    outline: none;
    text-indent: 10px;
}
`
const Name = styled.h4`
font-weight: 400;
font-size: 17px;
`

const PassBlock = styled.div`
margin: 1rem 2.4rem;
input{
    margin-top: 1rem;
    width: 350px;
    height: 35px;
    border: 1px solid #f1f1f1;
    background: #f1f1f1;
    border-radius: 5px;
    outline: none;
    text-indent: 10px;
}
img{
    height: 25px;
    width: 20px;
    opacity: 0.5;
    position: absolute;
    margin-top: 1.4rem;
    margin-left: -1.5rem;
}
`

const BtnSubmit = styled.button`
position: relative;
width: 235px;
height: 56px;
background-color: rgba(254, 97, 3, 0.2);
color:  #000;
outline: none;
border: 0px solid #808080;
font-family: Montserrat;
font-weight: 400;
font-size: 16px;
border-radius: 10px;
cursor: pointer;
margin-left: 2.4rem;
margin-top: 1rem;

`

const Block = styled.div`
width: 437px;
border-top: 1px solid rgba(171, 154, 144, 0.6);
height: 93px;
margin-top: 1.6rem;
margin-left: -1px;
`
const Text = styled.p`
width: 330px;
padding: 1rem 2.4rem;
font-size: 15px;

span{
    text-decoration: underline;
}
`


const RegisterBlock = () => {

    const [data, setData] = useState({
        username:"",
        surname:"",
        email:"",
        role:"User",
        password:"",
    })

    const [err, setErr] = useState()

    const handleChange = (e) => {
        setData(prev => ({...prev, [e.target.id] : ((e.target.value) || (e.target.checked)) }))
    }

    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            const url = "http://localhost:8800/api/auth/register"
            const { data:res } = await axios.post(url, data)
            console.log(res.message)
        }catch(err){
            if (err.response && 
                err.response.status >= 400 &&
                err.response.status <= 500
            ){
                setErr(err.response.data.message)
            }
        }
    }


  return (

    <>
    <Head>Я...</Head>
    <CheckBoxes>
        <Check>
            <input type="checkbox" id='role' value="Seller" onChange={handleChange} name='check'/>
            <label htmlFor='role'>Автор</label>
        </Check>
        <Check>
            <input type="checkbox" id='check' name='check2'/>
            <label htmlFor='check'>Коллекционер</label>
        </Check>
    </CheckBoxes>
    <FormBlock>
        <Name>Ссылка на приглашение</Name>
        <input type="text" size="0" />
    </FormBlock>
    <FormBlock>
        <Name>Имя на английском</Name>
        <input type="text" size="0" id="username"  value={data.username} required onChange={handleChange} />
    </FormBlock>
    <FormBlock>
        <Name>Фамилия на английском</Name>
        <input type="text" size="0" id="surname"  value={data.surname} required onChange={handleChange} />
    </FormBlock>
    <FormBlock>
        <Name>Email</Name>
        <input type="text" size="0" id="email" value={data.email} required onChange={handleChange} />
    </FormBlock>
    <PassBlock>
        <Name>
            Пароль
        </Name>
        <input type="password" size="0" placeholder="не менее 8 символов" id="password" /* value={data.password} required onChange={handleChange} */ /><img src='https://svgshare.com/i/iKc.svg' title='lock' />
    </PassBlock>
    {err && <span>Пользователь с таким Email уже есть</span>}
    <BtnSubmit onClick={handleClick}  >
            <span>Регистрация</span>
    </BtnSubmit>
    <Block>
        <Text>
        Регистрируясь, вы соглашаетесь с <span>Условиями использования</span> и <span>Политикой конфиденциальности</span>
        </Text>
    </Block>
    </>
  )
}

export default RegisterBlock