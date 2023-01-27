import styled from '@emotion/styled'

export const DropdownList = styled.div`  
    position: absolute;
    z-index: 1;
    top:10%;
    flex-flow: column nowrap;
    display: flex;
    box-shadow: 5px 5px 10px ${props => props.theme.colors.black};
    width:80%;
    height: 80%;
    background-color: ${props => props.theme.colors.grey};

    
    @media (min-width:420px){
        position: relative;
        top: auto;
        grid-area: Dropdown;
        width: 100%;
        height: 100%;
    }
`
export const ListItem = styled.div`
    margin: 0.8rem 0.8rem 0.2rem;
    height: 2.5rem;
    background-color: ${props => props.theme.colors.grey};
    font-size: 1.5rem;
    &:hover{
        opacity:90%;
        border-bottom: 0.3rem solid ${props => props.theme.colors.blue};
    }
`
