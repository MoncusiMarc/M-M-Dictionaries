import styled from '@emotion/styled'
import image from '../../resources/images/dropdown-button.png'

export const Button = styled.button`
    grid-area: DropdownButton;
    background: url(${image}) no-repeat;
    background-size: 100%;
    margin: 0.8rem;
    height: 3rem;
    width: 3rem;
    &:hover{
        opacity:80%;
    }
`
