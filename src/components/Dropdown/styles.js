import styled from '@emotion/styled'
import image from '../../resources/images/dropdown-button.png'

export const MainDropdown = styled.div`  
    background-color: #384257;
    height: 59rem;
    width: ${props => props.width};
`
export const Button = styled.button`  
    background: url(${image}) no-repeat left;
    background-size: 100%;
    border: none;
    margin: 2rem;
    height: 7rem;
    width: 7rem;

    &:focus{
        background-size: 105%;
    }
    &:hover{
        opacity:80%;
    }
`

export const MainGrid = styled.div`  
    font-family: 'Comfortaa';
    font-size: 2.5rem;
    color: #F4F9FF;
    margin-left:0.8rem; 
`
export const GridRow = styled.div`  
    height: 3rem;
    border: none;
    border-bottom: 0.3rem solid #2A2C31;
    padding-left: 1rem;

    &:hover{
        border-bottom: 0.3rem solid #2393FA;
        opacity:90%;
    }
   
`
