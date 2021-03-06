import React from 'react'
import styled from 'styled-components'
import img from '../../../assets/camera.png'
import FormAttributes from './FormAttributes'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddCards } from '../../../redux/slices/cards'

const Section = styled.section`
width: 610px;
height: 1600px;
position: relative;
top: 6rem;
left: 30rem;
`

const Head = styled.div`
width: 610px;
padding-bottom: 10px;
border-bottom: 1px solid rgba(148, 148, 148, 0.5) ;
font-family: 'Palatino';
font-weight: 400;
font-size: 26px;
`
const AddImg = styled.button`
width: 220px;
height: 270px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
border: 2px dashed rgba(57, 105, 176, 0.33);
border-radius: 20px;
justify-content: center;
align-items: center;
margin-top: 2rem;
font-family: 'Montserrat';
background: rgba(57, 105, 176, 0.15);
`
const ImgCont = styled.div`
img{
    width: 66px;
    height: 63px;
}
`


const TextHead = styled.div`
position: relative;
font-size: 14px;
font-weight: 500;
`
const TextDesc = styled.div`
text-align: center;
font-size: 11px;
`
const HeadName = styled.div`
font-size: 19px;
font-weight: 500;

`
const FormName = styled.div`
margin-top: 0.5rem;
input{
  width: 562px;
  height: 35px;
  border: 1px solid #949494;
  border-radius: 10px;
  outline: none;
  text-indent: 5px;
}
`
const Desc = styled.div`
margin-top: 0.5rem;
box-sizing: border-box;
textarea{
  font-family: 'Montserrat';
  width: 562px;
  height: 250px;
  border: 1px solid #949494;
  border-radius: 10px;
  outline: none;
  resize: none;
  padding: 5px 5px;
}
`

const HeadDest = styled.div`
font-size: 19px;
font-weight: 500;
`
const PriceDest = styled.div`
height: 187px;
width: 282px;
margin-top: 1rem;
display: flex;
flex-direction: column;

input{
  margin-top: 1rem;
  width: 260px;
  height: 35px;
  border: 1px solid #949494;
  border-radius: 10px;
  outline: none;
  text-indent: 5px;
}

.second{
    width: 200px
}
`
const PriceHead = styled.div`
font-size: 17px;
font-weight: 400;
`
const PriceDesc = styled.div`
margin-top: 10px;
font-size: 13px;
font-weight: 400;
opacity: 0.8;
`

const InputBlock = styled.div`
display: grid;
grid-template-columns: 315px 230px 35px;
`
const Trash = styled.div`
margin-top: 5.7rem;
img{
    width: 25px;
    height: 25px;
    margin-top: 1.5rem;
    opacity: 0.5;
}
`
const Btn = styled.button`
margin-top: 1rem;
width: 263px;
height: 35px;
background: #F5F5F5;
border: 1px solid #949494;
border-radius: 10px;
font-family: 'Montserrat';
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


// const HeadName = styled.div`
// font-size: 17px;
// font-weight: 400;

// `
// const FormName = styled.div`
// margin-top: 0.5rem;
// input{
//   width: 562px;
//   height: 35px;
//   border: 1px solid #949494;
//   border-radius: 10px;
//   outline: none;
//   text-indent: 5px;
// }
// `

const Under = styled.div`
margin-top: 0.3rem;
font-size: 15px;
font-weight: 400;
opacity: 0.6;
`
const Buttn = styled.button`
margin-top: 3rem;
width: 235px;
height: 56px;
background: rgba(254, 97, 3, 0.2);
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 10px;
font-family: 'Montserrat';
font-size: 17px;
`

const FormHead = styled.section`
margin-top: 2rem;
`

const HeadAttributes = styled.div`
font-size: 17px;
font-weight: medium;
`
const TextAttributes = styled.div`
display: flex;
margin-top: 10px;
input{
    width: 222px;
    height: 35px;
    border-top: 1px solid #949494;
    border-bottom: 1px solid #949494;
    border-left: 1px solid #949494;
    border-right: none;
    border-radius: 10px 0 0 10px;
    outline: none;
    text-indent: 5px;
}

select {
    font-family: 'Montserrat';
    height: 37px;
    border-left: none;
    border-radius: 0 10px 10px 0;
    outline: none;
}

`
const AttributesDropDownFirst = styled.div`
display: flex;

`
const Size = styled.div`
margin-left: 1rem;
`
const Price = styled.div`

`
const AttributesDropDownSecond = styled.div`
margin-top: 1rem;
display: flex;

select{

}
`

const DropAttributes = styled.div`
margin-top: 10px;

select{
    font-family: 'Montserrat';
    width: 277px;
    height: 40px;
    border: 1px solid #949494;
    border-radius: 10px;
    outline: none;
    font-size: 17px;
}

.status{
    width: 281px;
}
`

const Add = () => {

    const dispatch = useDispatch()
    const {register, handleSubmit, setError, formState : {errors, isValid}} = useForm({
      defaultValues:{
          name:'',
          price: '',
          size: '',
          description: '',
      },
      mode: 'onChange'
    });
  
    const onSubmit = async (values) => {
        const data = await dispatch(fetchAddCards(values))
        
        if (!data.payload) {
            return alert('???? ?????????????? ????????????????????????????')
        }
    }

  return (
    <Section>
        <Head>
            ???????????????? ????????????
        </Head>
        <AddImg>
            <ImgCont>
                <img src={img} alt='camera' />
            </ImgCont>
            <TextHead>
                ?????????????????? ????????
            </TextHead>
            <TextDesc>
                ??????????????, ?????????? ???????????????? ????????????????????
            </TextDesc>
        </AddImg>
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormHead>
        <HeadName>
            ???????????????? ???????????? (???? ????????????????????)
        </HeadName>
        <FormName>
            <input type="text" size="2"   {...register('name', { required: '?????????????? ??????'})}/>
        </FormName>
        </FormHead>
        <FormHead>
        <AttributesDropDownFirst>
        <Price>
        <HeadAttributes>
            ??????????????????
        </HeadAttributes>
        <TextAttributes>
            <input type="text" size="2" {...register('price', { required: '?????????????? ????????'})} />
            <select>
                <option>USD</option>
                <option>RUB</option>
                <option>EUR</option>
            </select>
        
        </TextAttributes>
        </Price>
        <Size>
        <HeadAttributes>
            ????????????
        </HeadAttributes>
        <TextAttributes>
            <input type="text" size="2" className="second" {...register('size', { required: '?????????????? ????????????'})}/>
            <select>
                <option>CM</option>
                <option>INCH</option>
            </select>
        </TextAttributes>
        </Size>
        </AttributesDropDownFirst>
        <AttributesDropDownSecond>
        <Price>
        <HeadAttributes>
            ??????????????????
        </HeadAttributes>
        <DropAttributes>
            <select>
                <option>???????????????? ??????????????????</option>
                <option>??????????</option>
                <option>??????????</option>
            </select>
        
        </DropAttributes>
        </Price>
        <Size>
        <HeadAttributes>
            C??????????
        </HeadAttributes>
        <DropAttributes>
            <select className="status">
                <option>???? ??????????????</option>
                <option>????????????</option>
            </select>
        </DropAttributes>
        </Size>
        </AttributesDropDownSecond>
        </FormHead>
        <FormHead>
        <HeadName>
            ???????????????? ???????????? (???? ????????????????????)
        </HeadName>
        <Desc>
            <textarea {...register('description', { required: '?????????????? ????????????????'})}></textarea>
        </Desc>
        </FormHead>
        <FormHead>
        <HeadDest>
            ?????????????????? ???????????????? ???? ??????????????
        </HeadDest>
        <InputBlock>
        <PriceDest>
            <PriceHead>
                ???????????? ????????????????????
            </PriceHead>
            <PriceDesc>
                ???????????????? ???????????? ???????????????????? ?????? ???????????????? Worldwide ?????? ???????????????? ???? ?????????? ????????
            </PriceDesc>
            <input type="text" size="2"/>
            <input type="text" size="2"/>
        </PriceDest>
        
        <PriceDest>
            <PriceHead>
                ?????????????????? ????????????????
            </PriceHead>
            <PriceDesc>
                ?????????????? ???????? ?????? ????????????????????<br />????????????????
                <br />
                <br />

            </PriceDesc>
            <input type="text" size="1" className="second" />
            <input type="text" size="1" className="second"/>
        </PriceDest>
        <Trash>
        <img src="https://svgshare.com/i/iEC.svg" alt="trash" />
        <img src="https://svgshare.com/i/iEC.svg" alt="trash" />
        </Trash>
        </InputBlock>
        </FormHead>
        <Btn>
            ???????????????? ????????????
        </Btn>
        <Check>
            <input type="checkbox" id='check' name='check'/>
            <label for='check'>???????????????? ???????? ?????????????????????? ?????????????????????? ???? ???????? ????????????</label>
        </Check>
        <FormHead>
        <HeadName>
            ???????????????? ?????????????? ?????????????????????? ???????? ????????????
        </HeadName>
        <FormName>
            <input type="text" size="2"/>
        </FormName>
        <Under>
            ????????????????: miniature, teddy bear, collectible toy
        </Under>
        </FormHead>
        <Buttn type="submit">
            ???????????????????? ????????????
        </Buttn>
        </form>
    </Section>
  )
}

export default Add