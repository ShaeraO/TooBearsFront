import React from 'react'
import styled from 'styled-components'

const Table = styled.div`
width: 794px;
height: 200px;
position: absolute;
top: 19.5rem;
left: 32rem;
`
const TableHead = styled.ul`
display: grid;
grid-template-columns: 220px 140px 210px 120px 50px;
list-style: none;
border-bottom:  1px solid rgba(171, 154, 144, 0.4);
font-weight: 600;
padding: 0.5rem 0;
`
const TablePm = styled.li`
opacity: 0.8;
`
const Order = styled.div`

height: 70px;
margin-top: 0rem;
border-bottom: 1px solid rgba(171, 154, 144, 0.4);
display: flex;
`

const ShopName = styled.div`
display: flex;
width: 200px;
padding-top: 1.6rem;

`
const Paid = styled.div`
height: 20px;
width: 40px;
margin: 1.4rem 2.5rem;
border-radius: 10px;
background: #F5F5F5;
text-align: center;
padding: 0.2rem;

`

const Track = styled.div`
width: 170px;
margin: 1.6rem 1.5rem;
text-align: center;


img{
    width: 16px;
    position: relative;
    top: 2px;
    opacity: 0.5;
}
span{
    position: relative;
    bottom: 0px;
}
`

const Date = styled.div`
margin: 1.6rem 1.5rem;

`

const View = styled.div`
margin: 1.6rem 1rem;

span{
    position: absolute;
    margin-left: 2.5rem;
}
img{
    opacity: 0.5;
}
`

const Block = styled.div`
position: relative;
width: 45px;
height: 50px;
bottom: 17px;
border-radius: 10px;
background-color: #F5F5F5;
`
const Orders = () => {
  return (
    <>
    <Table>
        <TableHead>
            <TablePm>Имя</TablePm>
            <TablePm>Оплачено</TablePm>
            <TablePm>Трекинг-номер</TablePm>
            <TablePm>Дата</TablePm>
            <TablePm>Посмотреть</TablePm>
        </TableHead>
        <Order>
            <ShopName>
                <Block />
                &nbsp;
                Funny Teddy Toys
            </ShopName>
            <Paid>
                Да
            </Paid>
            <Track>
                <img src='https://svgshare.com/i/iFN.svg' alt='barcode' />
            <span>RR080982526RU</span>
            </Track>
            <Date>
                22.04.2022
            </Date>
            <View>
                <span><img src='https://svgshare.com/i/iFP.svg' alt='eye' /></span>
            </View>
        </Order>
        <Order>
            <ShopName>
                <Block />
                &nbsp;
                Funny Teddy Toys
            </ShopName>
            <Paid>
                Да
            </Paid>
            <Track>
                <img src='https://svgshare.com/i/iFN.svg' alt='barcode' />
            <span>RR080982526RU</span>
            </Track>
            <Date>
                22.04.2022
            </Date>
            <View>
                <span><img src='https://svgshare.com/i/iFP.svg' alt='eye' /></span>
            </View>
        </Order>
    </Table>
    </>
  )
}

export default Orders