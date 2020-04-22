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
      left: 160px;
  }
`;

export const allPresent = () =>(
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
                 <p className="title right"> <IoMdVolumeMute /> Web Design  </p> <Web/>
                 <p className="title right"> <IoMdVolumeLow /> Computer Vision  </p> <CV/>
                 <p className="title right"> <IoMdVolumeHigh /> Graduated Research  </p> <GR/>
            </Col>
          </Row>
        </Tab.Container>
    </Styles>        
)