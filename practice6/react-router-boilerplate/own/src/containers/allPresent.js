import React, { Component } from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import {WebDesign} from '../components/WebDesign'
import {ComputerVision} from '../components/ComputerVision'
import {Research} from '../components/Research'
import { IoIosVolumeMute, IoIosVolumeLow, IoIosVolumeHigh } from "react-icons/io";
import '../Home.css'


export const allPresent = () => (
<>
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
              <h3 className ="subtitle"> <IoIosVolumeMute/> Web Design </h3>
              <WebDesign />
              <h3 className ="subtitle"> <IoIosVolumeLow/> Computer Vision </h3>
              <ComputerVision />
              <h3 className ="subtitle"> <IoIosVolumeHigh/> Research </h3>
              <Research/>
          </div>
        </Col>
      </Row>
    </Tab.Container>
</>
)