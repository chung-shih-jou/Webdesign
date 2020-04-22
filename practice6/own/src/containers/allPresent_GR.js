
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

export const allPresent_GR = () =>(
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
                <p className="title right"> <IoMdVolumeHigh /> Graduated Research  </p>
                <ul className="right">
                    <li>Researcher for <h>Diagnosing Obstructive Sleep Apnea Based on Ultrasound Functional Imaging of Tongue Muscle</h>.</li>
                    <li>Researched means of diagnosing different OSA severity by tongue muscle strain and auto-image processing using image similarity algorithm.</li>
                    <li>Discovered trend that tongue strain can accurately for identifying severe OSA patients during tongue pressure measurement.</li>
                     <li>Used one-third people from different severity for training which finding the threshold of tongue stiffness, the remainning was testing.</li>
                     <li>Results showed the optimal cut-off value for probability was 10.7% by the ROC curve.</li>
                     <li>Severe OSA was predicted with <h>73% sensitivity and 78% specificity</h> which meant good result on clinic experiment.</li>
                 </ul>
                 <GR/>
            </Col>
          </Row>
        </Tab.Container>
    </Styles>        
)