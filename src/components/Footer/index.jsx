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
              <FooterLink>Aim</FooterLink>
              <FooterLink>Vision</FooterLink>
              <FooterLink>Company policy</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink>Education</FooterLink>
              <FooterLink>Coding</FooterLink>
              <FooterLink>Teaching</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink>Email</FooterLink>
              <FooterLink>Phone number</FooterLink>
              <FooterLink>Technical service</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink>
                <i>
                  <span>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink>
                <i>
                  <span>
                    Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink>
                <i>
                  <span>
                    Twitter
                  </span>
                </i>
              </FooterLink>
              <FooterLink>
                <i>
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
