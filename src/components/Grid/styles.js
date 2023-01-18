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
    "SideMenu SearchBox"
    "SideMenu Information"
    "Footer Footer";
`
export const SearchingView = styled(Grid)`
    grid-template-columns: 1fr;
    grid-template-areas:
    "SearchBox";
`

export const SideMenu = styled.div`
    grid-area: SideMenu;
`

export const SearchBox = styled.div`
    grid-area: SearchBox;
    justify-self: center;
    align-self: center;
`

export const Information = styled.div`
    grid-area: Information;
`

export const Footer = styled.div`
    grid-area: Footer;
`
