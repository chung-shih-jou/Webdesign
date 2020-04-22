import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { IoIosPhonePortrait, IoLogoFacebook,IoLogoGithub,IoMdMail } from "react-icons/io";
const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    
    &:hover {
      color: white;
    }
  }
`;

export const NavigationButtom = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Code Life</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href ="/"><IoIosPhonePortrait/> phone: 0958292195</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href ="/"><IoMdMail/> email: dirtywolf2009@gmail.com</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href ="https://github.com/chung-shih-jou/Webdesign"><IoLogoGithub/> github: chung-shih-jou</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href ="https://www.facebook.com/profile.php?id=100003207875474"><IoLogoFacebook/> facebook: Rose chung, 鍾詩柔</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)