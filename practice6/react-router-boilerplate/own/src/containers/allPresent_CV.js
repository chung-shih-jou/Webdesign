import React, { Component } from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import {ComputerVision} from '../components/ComputerVision'
import { IoIosVolumeLow} from "react-icons/io";
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

export const allPresent_CV = () => (
<Style>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col xs={1}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item><Nav.Link eventKey="first" href="/Presentation">Presentation</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="third" href="/Presentation/Web">WebDesign</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="fourth" href="/Presentation/CV">ComputerVision</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="second" href="/Presentation/GR">Gratuated Reasearch</Nav.Link></Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
            <div  className ='presentation'>
                  <h3 className ="subtitle"> <IoIosVolumeLow/> Computer Vision </h3>
                  <ul className = "list">
                      <li>Learned the <h>stereo matching</h> which creating disparity map assignment achieved via winner-take all.</li>
                      <li>Implemented the <h>projecting geometry</h> which estimating homography and warping in 3D graphics.</li>
                      <li>Learned <h>feature detection and matching</h> which distinguishing faces and detecting the position of objects.</li>
                      <li>Trained <h>machine learning model</h> which finding the letters automatically.</li>
                  </ul>
              </div>
          <ComputerVision />
        </Col>
      </Row>
    </Tab.Container>
</Style>
)