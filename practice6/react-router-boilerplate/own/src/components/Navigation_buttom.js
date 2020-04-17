import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import { IoIosPhonePortrait, IoLogoFacebook, IoLogoGithub, IoMdMailOpen } from "react-icons/io";

const Styles = styled.div`
 .navbar {
  background-color: #222;
  height:150px;
　background-size: cover;
　font-size:15px;
　color: #bbb;
　font-weight:bold;
　background-color: #222;
　&:hover{
   color: white;
 }
 
 .navbar-brand, .navbar-nav .nav-link {
  color: #bbb;
  
  &:hover{
   color: white;
  }
 }
 
`;

export const NavigationBut = () => (
 <Styles>
  <Navbar expand="lg">
   <Navbar.Brand href="/">Contact Me</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
           <Nav className = "ml-auto flex-column">
               <Nav.Item><Nav.Link href="/">< IoIosPhonePortrait /> Phone: 0958292195 </Nav.Link></Nav.Item>
               <Nav.Item><Nav.Link href="/"><IoMdMailOpen /> email: dirtywolf2009@gmail.com </Nav.Link></Nav.Item>
               <Nav.Item><Nav.Link href="https://www.facebook.com/profile.php?id=100003207875474"><IoLogoFacebook/> facebook: Rose Chung, 鍾詩柔</Nav.Link></Nav.Item>
               <Nav.Item><Nav.Link href="https://github.com/chung-shih-jou?tab=repositories"><IoLogoGithub/> github: chung-shih-jou</Nav.Link></Nav.Item>
           </Nav>
      </Navbar.Collapse>
      
     
  </Navbar>
 </Styles>
)