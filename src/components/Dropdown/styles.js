import styled from '@emotion/styled'
import image from '../../resources/images/dropdown-button.png'

export const MainDropdown = styled.div`  
    background-color: #384257;
    height: 100%;
    width: ${props => props.width};
    z-index: 1;
    @media (max-width: 420px){
        width: ${props => props.widthMobile};
    }
`
export const Button = styled.button`  
    background: url(${image}) no-repeat;
    background-size: 100%;
    margin: 0.8rem;
    height: 3rem;
    width: 3rem;
    &:hover{
        opacity:80%;
    }

`

export const MainGrid = styled.div`  
    font-size: 2rem;
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
