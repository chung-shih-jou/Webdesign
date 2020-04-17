import React, { Component } from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import {WebDesign} from '../components/WebDesign';
import { IoIosVolumeMute} from "react-icons/io";
import '../Home.css'

const Style = styled.div`

.carousel{
     position: relative;
     top: 0;
     buttom: 0;
     left:60px;
     right:0;
}
  .carousel-item img{
     content: "";
     display: block;
     background:#000;
     opacity:0.8;
     position: relative;
     top: 0;
     buttom: 0;
     left: calc(13%);
     right:0;
 }
 .carousel-caption{
    width:500px;
    background: #00FFFF;
    opacity: 0.5;
    padding: 10px 10px;
    position: relative;
    left: calc(32%);
 }
 
 .carousel-control-prev, .carousel-control-next{
    width: 50px;
    height: 50px;
    background-color: pink;
    border-radius: 100%;
    top: calc(40%);
 }
 .carousel-control-next{
    right: calc(60px);
 }
 .carousel-control-prev{
    left: calc(70px);
 }

`;

export const allPresent_Web = () => (
<Style>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col xs={1}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item><Nav.Link eventKey="first" href="/Presentation">Presentation</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="third" href="/Presentation/Web">WebDesign</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="fourth" href="/Presentation/CV">ComputerVision</Nav.Link></Nav.Item><Nav.Item><Nav.Link eventKey="second" href="/Presentation/GR">Gratuated Reasearch</Nav.Link></Nav.Item>
            
          </Nav>
        </Col>
        <Col sm={9}>
          <div  className ='presentation'>
              <h3 className ="subtitle"> <IoIosVolumeMute/> Web Design </h3>
              <ul className = "list">
                  <li>Learned Javascript for web serving by browser.</li>
                  <li>Implemented "flappy bird" games by <h> p5.js modules</h>.</li>
                  <li>Mixed sound, acceleration of gravity on birds and random appearing pipes' height make more fun.</li>
                  <li>Implemented "todo-list, calculator and own Blog" projects by <h>React modules </h>.</li>
                  <li>Put bootstrap and React-icons template into my projects and modified which achieved unique, esthetic feeling and time-saving.</li>
              </ul>
          </div>
          <WebDesign />
        </Col>
      </Row>
    </Tab.Container>
</Style>
)