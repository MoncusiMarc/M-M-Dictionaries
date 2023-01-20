import styled from '@emotion/styled'

export const Grid = styled.div`
    display: grid;
    width:100%;
    height: 100%;
`
export const FullView = styled(Grid)`
    grid-template-columns: 1fr 3fr;
    grid-template-rows:10% 80% 10%;
    grid-template-areas:
    "DropdownButton SearchBox"
    "Dropdown Information"
    "Footer Footer";
`
export const SearchingView = styled(Grid)`
    grid-template-columns: 1fr;
    grid-template-rows: 90% 10%;
    grid-template-areas:
    "SearchBox"
    "Footer";
`
