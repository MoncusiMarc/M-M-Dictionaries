import styled from '@emotion/styled'
import searchImage from './images/search-icon.png'
import searchImage2 from './images/search-icon2.png'

export const Box = styled.input`
    font-family: 'Comfortaa';
    background-color: transparent;
    border: none;
    border-bottom: 0.1rem solid #F4F9FF;
    color: #F4F9FF;
    font-size: 1.5rem;
    height: 3rem;
    left: 40%;
    margin:  25rem 0 0 -5rem;
    padding: 10px 0px;
    position: relative;
    top: 50%;
    width: 40rem;

    &:focus {

        outline: none;
        border-bottom: 0.1rem solid #2393FA;
          
    }
  
`
export const ButtonSearch = styled.button`
    border:none;
    background: url(${searchImage}) no-repeat right;
    background-size: 50%;
    height:3rem;
    position:relative;
    left:45.1rem;
    top:1rem;
    width:3rem;
   
    Box:focus {
        background: url(${searchImage2}) no-repeat right;
    }
`
