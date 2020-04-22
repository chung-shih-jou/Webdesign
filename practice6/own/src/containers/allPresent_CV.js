import React from 'react';
import "../Home.css"
import styled from 'styled-components';
import { CV } from '../components/CV';
import { Web } from '../components/Web';
import { GR } from '../components/GR';
import Tab from 'react-bootstrap/Tab'
import { Nav } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import {IoMdVolumeMute, IoMdVolumeLow, IoMdVolumeHigh} from "react-icons/io";

const Styles = styled.div`
  .right{
      position:relative;
      left: 170px;
  }
`;

export const allPresent_CV = () =>(
    <Styles>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col xs={1}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item><Nav.Link href="/presentation">Presentation</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/presentation/Web">WebDesign</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/presentation/CV">ComputerVision</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/presentation/GR">Gratuated Research</Nav.Link></Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
                 <p className="title right"> <IoMdVolumeLow /> Computer Vision  </p> 
                <ul className="right">
                     <li>Learned the <h>stereo matching </h>which creating disparity map assignment achieved via winner-take all.</li>
                     <li>Implemented the <h>projecting geometry </h>which estimating homography and warping in 3D graphics.</li>
                     <li>Learned <h>feature detection and matching</h> which distinguishing faces and detecting the position of objects.</li>
                     <li>Trained <h>machine learning model</h> which finding the letters automatically.</li>
                 </ul>
                 <CV/>
            </Col>
          </Row>
        </Tab.Container>
    </Styles>        
)