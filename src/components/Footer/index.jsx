import React from 'react'
import {
  MainFooter, Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Title,
  Copyright
} from './styles'

const Dropdown = () => {
  return (
    <MainFooter>
      <Box>
        <Title>
          SHARPEDU
        </Title>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href='#'>Aim</FooterLink>
              <FooterLink href='#'>Vision</FooterLink>
              <FooterLink href='#'>Company policy</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href='#'>Education</FooterLink>
              <FooterLink href='#'>Coding</FooterLink>
              <FooterLink href='#'>Teaching</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href='#'>Email</FooterLink>
              <FooterLink href='#'>Phone number</FooterLink>
              <FooterLink href='#'>Technical service</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href='#'>
                <i className='fab fa-facebook-f'>
                  <span>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-instagram'>
                  <span>
                    Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-twitter'>
                  <span>
                    Twitter
                  </span>
                </i>
              </FooterLink>
              <FooterLink href='#'>
                <i className='fab fa-youtube'>
                  <span>
                    Youtube
                  </span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
        <Copyright>Copyright©2023 Sharpedu</Copyright>
      </Box>

    </MainFooter>
  )
}

export default Dropdown
