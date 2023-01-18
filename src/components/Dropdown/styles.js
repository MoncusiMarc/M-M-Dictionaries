import styled from '@emotion/styled'
import image from '../../resources/images/dropdown-button.png'

export const MainDropdown = styled.div`
    grid-area: Dropdown;
    background-color: ${props => props.theme.colors.grey};
    height: 59rem;
    width: ${props => props.width};
    @media (max-width: 420px){
        width: ${props => props.widthMobile};
    }
`
export const Button = styled.button`  
    background: url(${image}) no-repeat left;
    background-size: 100%;
    border: none;
    margin: 1rem;
    height: 7rem;
    width: 7rem;

    &:focus{
        background-size: 105%;
    }

    &:hover{
        opacity:80%;
    }

    @media (max-width: 420px){
        width:4rem;
        height:4rem;
        margin:0.5rem;
    }

`

export const MainGrid = styled.div`  
    font-family: 'Comfortaa';
    font-size: 2rem;
    margin-left:0.8rem; 
`
export const GridRow = styled.div`  
    height: 3rem;
    border-bottom: 0.3rem solid ${props => props.theme.colors.black};
    padding-left: 1rem;

    &:hover{
        border-bottom: 0.3rem solid ${props => props.theme.colors.blue};
        opacity:90%;
    }
   
`
