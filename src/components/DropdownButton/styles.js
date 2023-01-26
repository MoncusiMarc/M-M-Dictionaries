import styled from '@emotion/styled'
import image from '../../resources/images/dropdown-button.png'

export const DropdownTop = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.isDropdown === true ? props.theme.colors.grey : 'inherit'};
`

export const Button = styled.button`
    margin: 0.8rem;
    width: 3rem;
    height: 3rem;
    background: url(${image}) no-repeat;
    background-size: 100%;

    grid-area: DropdownButton;
    &:hover{
        opacity:80%;
    }
`
