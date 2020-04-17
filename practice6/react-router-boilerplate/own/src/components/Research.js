import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';
import ReactPlayer from 'react-player'

const GR = [
    {
        name: 'Clinic experienment in NTUH',
        url: require("./img/graduated/clinic.gif"),
        content: 'Recruited 120 participates in different severity.'
    },
    {
        name: 'Architecture of Speckle Tracking',
        url: require("./img/graduated/Figure1.png"),
        content: 'The correlation coefficient (CC) between reference and comparison images'
    },
    {
        name: 'Result of tracking',
        url: require("./img/graduated/software.gif"),
        content: ''
    },
    {
        name: 'Instrument structure and positioning protocol',
        url: require("./img/graduated/Figure2.png"),
        content: ''
    },
    {
        name: 'Result of predicting severe severity',
        url: require("./img/graduated/Figure3.png"),
        content: 'Got threshold from training data(80 people) and testing remainning'
    }
]
export const Research = () => (
<> 
    <Carousel>
        {GR.map((e) => { 
            return (
                <Carousel.Item> 
                    <img className="d-block w-75" src={e.url} />
                        <Carousel.Caption  className="text-white font-weight-bold">
                          <h3>{e.name}</h3>
                              <p>{e.content}</p>
                        </Carousel.Caption>
                </Carousel.Item>
            )})}
    </Carousel>
</>
)