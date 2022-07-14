import styled from 'styled-components'
import img from '../assets/loupe.png'

const Search = styled.div`
margin-top: 20px;
margin-left: 70px;
height: 35px;

input{
  border: none;
  margin-top: 1px;
  background: transparent;
  height: 26px;
  width: 300px;
  outline:none;
  margin-left: 26px;
  opacity: 0.7;
}
`
const  SearchInput = styled.div`
margin-top: 0.5rem;
display: flex;
border: 1px solid #949494;
border-radius: 30px;
`
const SearchIcon = styled.div`
height: 20px;
width: 10px;
display: grid;
place-items: center;

img{
  position:relative;
  width: 15px;
  height: 15px;
  margin-top: 6px;
  margin-left: 0.7rem;
  opacity: 1;
}
`
const Searchbar = ({placeholder}) => {
  return (
    <Search>
        <SearchInput>
          <SearchIcon><img src={img} alt="srch"/></SearchIcon>
            <input type="text" placeholder={placeholder} />
        </SearchInput>
    </Search>
  )
}

export default Searchbar