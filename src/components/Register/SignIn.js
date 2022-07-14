import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Forgot from './Forgot'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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

    // const [credentials, setCredentials] = useState({
    //     username:undefined,
    //     password:undefined,
    // })

    // const {loading, error, dispatch } = useContext(AuthContext);

    // const navigate = useNavigate()

    //  const handleChange = (e) => {
    //      setCredentials(prev => ({...prev, [e.target.id] : e.target.value}))
    //  }

    // const handleClick = async e => {
    //     e.preventDefault();
    //     dispatch({type: "LOGIN_START"})
    //     try{
    //         const res = await axios.post("/auth/login", credentials)
    //         dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    //         navigate("/")
    //     } catch(err){
    //         dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
    //     }
    // }

 
    const [data, setData] = useState({
        email:"",
        password:"",
    });

    const [err, setError] = useState("")
    const navigate = useNavigate()

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            const url = "http://localhost:8800/api/auth/login"
            const {data:res} = await axios.post(url, data);
            localStorage.setItem("token", res.data)
            window.location = "/account"
        } catch (err){
            if (
                err.response &&
                err.response.status >= 400 &&
                err.response.status <= 500
            ){
                setError(err.response.data.message)
            }
        }
    }


  return (
    <>
    <Block>
        <FormBlock>
            <Name>Логин</Name>
            <input 
            type="text" 
            size="0" 
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            />
        </FormBlock>
        <PassBlock>
        <Name>
            Пароль
        </Name>
        <input 
        type="password" 
        size="0" 
        name="password"
        onChange={handleChange}
        value={data.password}
        required
        placeholder="не менее 8 символов" 
        /><img src='https://svgshare.com/i/iKc.svg' title='lock' />
    </PassBlock>
    <CheckBoxes>
    {err && <span>Неправильный логин или пароль</span>}

    <BtnSubmit onClick={handleSubmit} >
            <span>Вход</span>
    </BtnSubmit>
    <Check>
        <input type="checkbox" id='check' name='check'/>
        <label htmlFor='check'>Запомнить меня</label>
    </Check>
    </CheckBoxes>
    <Forgot />
    </Block>
    </>
  )
}

export default SignIn