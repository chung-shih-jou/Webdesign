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

export const allPresent_Web = () =>(
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
                 <p className="title right"> <IoMdVolumeMute /> Web Design  </p> 
                <ul className="right">
                    <li>Learned Javascript for web serving by browser..</li>
                    <li>Implemented "flappy bird" games by <h>p5.js module</h>.</li>
                    <li>Mixed sound, acceleration of gravity on birds and random appearing pipes' height make more fun.</li>
                     <li>Implemented "todo-list, calculator" projects by <h>React.js module </h>.</li>
                     <li>Put bootstrap and React-icons template into my projects and modified which achieved unique, esthetic feeling and time-saving.</li>
                 </ul>
                 <Web/>
            </Col>
          </Row>
        </Tab.Container>
    </Styles>        
)