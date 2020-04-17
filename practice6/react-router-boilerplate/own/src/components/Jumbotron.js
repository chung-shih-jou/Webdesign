import React, { Component } from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import background from '../assets/background.png'
const Styles = styled.div`
 .jumbo{
     background: url(${background}) no-repeat fixed bottom;
     background-size: cover;
     color: #ccc;
     height: 200px;
     position: relative;
     z-index: -2;
 }
 
 .overlay{
     background-color: #000;
     opacity: 0.6;
     position: absolute;
     top:0;
     left:0;
     right:0;
     bottom:0;
     z-index: -1;
     
 }
`;

export const Jumbotron = () => (
 <Styles>
  <Jumbo fluid className="jumbo">
   <div className = "overlay" />
   <Container>
    <h1>Welcome to Shih-Jou's Blog</h1>
    <p>The junior front-end software engineering blog</p>
   </Container>
  </Jumbo>
 </Styles>
)