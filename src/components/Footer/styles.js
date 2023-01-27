import styled from '@emotion/styled'

export const MainFooter = styled.div`
    grid-area:Footer;
`
export const Title = styled.h1`
    margin-bottom:2%;
    background:${props => props.theme.colors.grey};
    text-align: center;
`
export const Box = styled.div`
    padding: 2rem 3rem;
    background-color:${props => props.theme.colors.grey};

    @media (max-width: 1000px) {
        padding: 2rem 2rem;
    }
`

export const Container = styled.div`
    flex-direction: column;
    display: flex;
    margin: 0 auto;
    max-width: 62.5rem;
    background:${props => props.theme.colors.grey};
    justify-content: center;
`

export const Column = styled.div`
    flex-direction: column;
    display: flex;
    margin-left: 1rem;
    background:${props => props.theme.colors.grey};
    text-align: left;
`
export const Row = styled.div`
    grid-template-columns: repeat(auto-fill, minmax(11.56rem, 1fr));
    grid-gap: 1.25rem;
    display: grid;
    background:${props => props.theme.colors.grey};
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
    }
`

export const FooterLink = styled.a`
    color: ${props => props.theme.colors.white};
    margin-bottom: 1.25rem;
    font-size: 1.125rem;
    text-decoration: none;
    
    span{
        background:${props => props.theme.colors.grey};

    }
    &:hover {
        color: ${props => props.theme.colors.blue};
        transition: 200ms ease-in;
    }
    background:${props => props.theme.colors.grey};

`

export const Heading = styled.p`
    margin-bottom: 1rem;
    background:${props => props.theme.colors.grey};
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
`
export const Copyright = styled.p`
    background:${props => props.theme.colors.grey};
    text-align:center;
`
