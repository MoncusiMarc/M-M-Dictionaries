import styled from '@emotion/styled'

export const Grid = styled.div`
    display: grid;
    width:100%;
    height: 100%;
`
export const FullView = styled(Grid)`
    grid-template-columns: 1fr 3fr;
    grid-template-rows:auto;
    grid-template-areas:
    "Dropdown SearchBox"
    "Dropdown Information"
    "Footer Footer";
`
export const SearchingView = styled(Grid)`
    grid-template-columns: 1fr;
    grid-template-areas:
    "SearchBox"
    "Footer";
`

export const Information = styled.div`
    grid-area: Information;
`
