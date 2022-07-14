import React from 'react'
import styled from 'styled-components'

const BannerCard = styled.div`
background: #DADADA;
height: 100px;
width: 1155px;
margin: 0 auto;
text-align: center;
padding-top: 7rem;
`

const Banner = () => {
  return (
    <BannerCard>
        Баннер
    </BannerCard>
  )
}

export default Banner