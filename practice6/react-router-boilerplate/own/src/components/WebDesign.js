import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import styled from 'styled-components';

const Web = [
    {
        name: 'todoList',
        url: require("./img/Web/todoList.gif"),
        content: 'using React.js module'
    },
    {
        name: 'Calculator',
        url: require("./img/Web/Calu.gif"),
        content: 'using React.js module'
    },
    {
        name: 'flappybird',
        url: require("./img/Web/flappybird.gif"),
        content: 'using p5.js module'
    }
]

export const WebDesign = () => (
<> 
    <Carousel>
        {Web.map((e) => { 
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