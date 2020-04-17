import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';
import ReactPlayer from 'react-player'

const CV = [
    {
        name: 'Bilateral Filter',
        url: require("./img/CV/HW1_process.png"),
        content: 'including spatial and range kernel which weights are larger if the neighbor pixel has similar intensity to the center pixel'
    },
    {
        name: 'Result of BF in color pattern',
        url: require("./img/CV/HW1_result.png"),
        content: 'different RGB weight result and find top 3'
    },
    {
        name: 'Result of BF in color pattern',
        url: require("./img/CV/HW1_result2.png"),
        content: 'left-top is control group'
    },
    {
        name: 'Feature Detection and Matching',
        url: require("./img/CV/HW2_process.png"),
        content: 'PCA (principal component analysis) and LDA(Linear discriminant analusis)'
    },
    {
        name: 'Meaching Learning',
        url: require("./img/CV/HW2_process2.png"),
        content: 'Keras & Tensorflow'
    },
    {
        name: 'Projective Geometry',
        url: require("./img/CV/HW3_result.png"),
        content: 'Recap of Homography'
    },
    {
        name: 'Projective Geometry',
        url: require("./img/CV/HW3_result2.png"),
        content: 'Recap of Homography'
    },
    {
        name: 'Projective Geometry',
        url: require("./img/CV/HW3_result3.png"),
        content: 'Recap of Homography'
    },
    {
        name: 'Stereo matching',
        url: require("./img/CV/HW4_result.png"),
        content: ''
    }
]

export const ComputerVision = () => (
<> 
    <Carousel>
        {CV.map((e) => { 
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