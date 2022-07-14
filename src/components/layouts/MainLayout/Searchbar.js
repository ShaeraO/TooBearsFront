import React from 'react'
import styled from 'styled-components'
import img from '../../../assets/loupe.png'

const Search = styled.div`
height: 35px;

input {
  border: none;
  margin-top: 1px;
  background: transparent;
  height: 26px;
  width: 300px;
  outline: none;
  opacity: 0.7;
  margin-left: 25px;
  font-family: 'Montserrat';
  font-size: 14px;
}
`
const SearchInput = styled.div`
margin-top: 0.5rem;
display: flex;
border: 1px solid #949494;
border-radius: 30px;
padding-bottom: 2px;
`

const SearchIcon = styled.div`
height: 20px;
width: 10px;
display: flex;
place-items: center;

img{
    position: relative;
    height: 17px;
    margin-top: 8px;
    margin-left: 0.7rem;
    opacity: 1;
}
`

const Searchbar = ({placeholder}) => {
  return (
    <Search>
        <SearchInput>
            <SearchIcon><img src={img} alt="srch" /></SearchIcon>
            <input type="text" placeholder={placeholder} />
        </SearchInput>
    </Search>
  )
}

export default Searchbar