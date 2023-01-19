import styled from '@emotion/styled'
import searchImage from '../../resources/images/search-icon.png'
import searchImage2 from '../../resources/images/search-icon2.png'

export const FatherBox = styled.form`
    grid-area:SearchBox;
    justify-self: center;
    align-self: center;
`
export const Box = styled.input`
    font-family: 'Comfortaa';
    border-bottom: 0.1rem solid ${props => props.theme.colors.white};
    font-size: 1.5rem;
    &:focus {
        outline: none;
        border-bottom: 0.1rem solid  ${props => props.theme.colors.blue};
    }
    @media (max-width: 420px){
    }
`
export const ButtonSearch = styled.button`
    border: none;
    background: url(${searchImage}) no-repeat right;
    background-size: 50%;
    :hover{
        background: url(${searchImage2}) no-repeat right;
        background-size: 52%;
    }
    &:focus{
        background-size: 53%;
    }

    @media (max-width: 420px){
        top:13rem;
        left:20rem;
     }
`
