import styled from '@emotion/styled'

export const DropdownList = styled.div`  
    background-color: ${props => props.theme.colors.grey};
    grid-area: Dropdown;
    display: flex;
    flex-flow: column nowrap;
`
export const ListItem = styled.div`
    font-size: 1.5rem;
    margin: 0 0.8rem; 
    height: 2.5rem;
    background-color: ${props => props.theme.colors.grey};

    &:hover{
        border-bottom: 0.3rem solid ${props => props.theme.colors.blue};
        opacity:90%;
    }
`
