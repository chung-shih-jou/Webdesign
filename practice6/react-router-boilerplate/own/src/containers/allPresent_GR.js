import React, { Component } from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import {Research} from '../components/Research'
import { IoIosVolumeHigh} from "react-icons/io";
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


export const allPresent_GR = () => (
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
                  <h3 className ="subtitle"> <IoIosVolumeHigh/> Graduated Research </h3>
                  <ul className = "list">
                      <li>Researcher for <h>Diagnosing Obstructive Sleep Apnea based on Ultrasound Functional Imaging of Tongue mucle</h>.</li>
                      <li>Researched means of diagnosing different OSA severity by tongue muscle strain and auto-image processing using image similarity algorithm.</li>
                      <li>Discovered trend that tongue strain can accurately for identifying severe OSA patients during tongue pressure measurement.</li>
                      <li>Used one-third people from different severity for training which finding the threshold of tongue stiffness, the remainning was testing.</li>
                      <li>Results showed the optimal cut-off value for probability was 10.7% by the ROC curve.</li>
                      <li>Severe OSA was predicted with <h>73% sensitivity and 78% specificity</h> which meant good result on clinic experiment.</li>
                  </ul>
              </div>
          <Research />
        </Col>
      </Row>
    </Tab.Container>
</Style>
)