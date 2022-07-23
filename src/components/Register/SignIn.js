import React from 'react'
import styled from 'styled-components'
import Forgot from './Forgot'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth'
import { Navigate } from 'react-router-dom'
const Block = styled.div`

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
width: 150px;
height: 46px;
background-color: rgba(254, 97, 3, 0.2);
color:  #000;
outline: none;
border: 0px solid #808080;
font-family: Montserrat;
font-weight: 400;
font-size: 18px;
border-radius: 10px;
cursor: pointer;
margin-left: 2.4rem;
margin-top: 1rem;

`
const CheckBoxes = styled.div`
display: flex;
position: relative;
left: 1px;
padding-bottom: 1rem;
`
const Check = styled.div`
margin: 1.5em 2rem;

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


const SignIn = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const {register, handleSubmit, setError, formState : {errors, isValid}} = useForm({
    defaultValues:{
        email: '',
        password: ''
    },
    mode: 'onChange'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values))

    if (!data.payload) {
        return alert('Не удалось авторизоваться')
    }

    if ('token' in data.payload){
        window.localStorage.setItem('token', data.payload.token)
    }
  }

  console.log('isAuth', isAuth)


  if (isAuth){
    return <Navigate to ="/account" />
  }



  return (
    <>
    <Block>
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormBlock>
            <Name>Логин</Name>
            <input 
            type="email" 
            size="0" 
            id="email"
            {...register('email', { required: 'Укажите почту'})}
            />
        </FormBlock>
        <PassBlock>
        <Name>
            Пароль
        </Name>
        <input 
        type="password" 
        size="0" 
        id="password"
        {...register('password', { required: 'Укажите пароль'})}
        placeholder="не менее 8 символов" 
        /><img src='https://svgshare.com/i/iKc.svg' title='lock' />
    </PassBlock>
    <CheckBoxes>

    <BtnSubmit type="submit">
            <span>Вход</span>
    </BtnSubmit>
  
    <Check>
        <input type="checkbox" id='check' name='check'/>
        <label htmlFor='check'>Запомнить меня</label>
    </Check>
    </CheckBoxes>
    </form>
    <Forgot />
    </Block>
    </>
  )
}

export default SignIn