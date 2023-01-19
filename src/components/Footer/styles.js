import styled from '@emotion/styled'

export const MainFooter = styled.div`
    grid-area:Footer;
`
export const Title = styled.h1`
    margin-left:45%;
    margin-bottom:2%;
    background:${props => props.theme.colors.grey};
`
export const Box = styled.div`
    padding: 5rem 3.75rem;
    background-color:${props => props.theme.colors.grey};
    bottom: 0;
    width: 100vw;

    @media (max-width: 1000px) {
        padding: 4.375rem 1.875rem;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 62.5rem;
    margin: 0 auto;
    background:${props => props.theme.colors.grey};

`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 3.75rem;
    background:${props => props.theme.colors.grey};
`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 
                            minmax(11.56rem, 1fr));
    grid-gap: 1.25rem;
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, 
                            minmax(12.5rem, 1fr));
    }
    background:${props => props.theme.colors.grey};

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
  font-size: 1.5rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 2.5rem;
  font-weight: bold;
  background:${props => props.theme.colors.grey};

`
export const Copyright = styled.p`
    background:${props => props.theme.colors.grey};
    margin-left:41vw;
`
