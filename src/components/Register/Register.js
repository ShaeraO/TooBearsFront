import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegister } from '../../redux/slices/auth'
import { Navigate } from 'react-router-dom'

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

    const dispatch = useDispatch()
    const {register, handleSubmit, formState : {errors, isValid}} = useForm({
      defaultValues:{
          username: '',
          surname: '',
          email: '',
          password: ''
      },
      mode: 'onChange'
    });
  
    const onSubmit = async (values) => {
      const data = await dispatch(fetchRegister(values))
  
      if (!data.payload) {
          return alert('Не удалось Зарегистрироваться')
      }
  
      if ('token' in data.payload){
          window.localStorage.setItem('token', data.payload.token)
      }
    }
  
  

  return (

    <>
    <Head>Я...</Head>
    <CheckBoxes>
        <Check>
            <input type="checkbox" name='check' id='check'/>
            <label htmlFor='check'>Автор</label>
        </Check>
        <Check>
            <input type="checkbox" id='check2' name='check2'/>
            <label htmlFor='check2'>Коллекционер</label>
        </Check>
    </CheckBoxes>
    <FormBlock>
        <Name>Код приглашения</Name>
        <input type="text" size="0" />
    </FormBlock>
    <form onSubmit={handleSubmit(onSubmit)}>
    <FormBlock>
        <Name>Имя на английском</Name>
        <input type="text" size="0" id="username" {...register('username', { required: 'Укажите имя'})}/>
    </FormBlock>
    <FormBlock>
        <Name>Фамилия на английском</Name>
        <input type="text" size="0" id="surname" {...register('surname', { required: 'Укажите фамилию'})} />
    </FormBlock>
    <FormBlock>
        <Name>Email</Name>
        <input type="text" size="0" id="email" {...register('email', { required: 'Укажите почту'})} />
    </FormBlock>
    <PassBlock>
        <Name>
            Пароль
        </Name>
        <input type="password" size="0" placeholder="не менее 8 символов" id="password" {...register('password', { required: 'Укажите пароль'})} /><img src='https://svgshare.com/i/iKc.svg' title='lock' />
    </PassBlock>
    <BtnSubmit disabled={!isValid} type="submit">
            <span>Регистрация</span>
    </BtnSubmit>
    </form>
    <Block>
        <Text>
        Регистрируясь, вы соглашаетесь с <span>Условиями использования</span> и <span>Политикой конфиденциальности</span>
        </Text>
    </Block>
    </>
  )
}

export default RegisterBlock