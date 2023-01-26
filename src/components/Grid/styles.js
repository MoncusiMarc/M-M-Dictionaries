import styled from '@emotion/styled'

export const Grid = styled.div`   
    display: grid;
    width:100%;
    height: 100%;
`
export const FullView = styled(Grid)`
    grid-template-columns: 1fr 9fr;
    grid-template-rows:10% 80% 10%;
    grid-template-areas:
    "DropdownButton SearchBox"
    "Information Information"
    "Footer Footer";
    @media (min-width:420px){
        grid-template-areas:
        "DropdownButton SearchBox"
        ${props => props.isDropdown === true ? '"Dropdown Information"' : '"Information Information"'}
        "Footer Footer";
    }
`
export const SearchingView = styled(Grid)`
    grid-template-columns: 1fr;
    grid-template-rows: 90% 10%;
    grid-template-areas:
    "SearchBox"
    "Footer";
`
