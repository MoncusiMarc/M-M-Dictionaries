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
`
export const ButtonSearch = styled.button`
    border: none;
    background: url(${searchImage}) no-repeat;
    background-size: 100%;
    width: 2rem;
    height: 2rem;
    :hover{
        background: url(${searchImage2}) no-repeat;
        background-size: 100%;
    }
    &:focus{
        background-size: 100%;
    }
`
