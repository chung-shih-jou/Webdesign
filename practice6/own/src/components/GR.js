import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
const photo=  [
    {title: "clinic experience in NTUH",
    url: require("./img/graduated/clinic.gif"),
    content: "Recruited 120 participates in different severity"
    },
    {title: "Architecture of Speckle Tracking",
    url: require("./img/graduated/Figure1.png"),
    content: "The correlation coefficient (CC) between reference and comparison images"
    },
    {title: "Result of tracking video",
    url: require("./img/graduated/software.gif"),
    content: ""
    },
    {title: "Instrument structure and positioning protocol",
    url: require("./img/graduated/Figure2.png"),
    content: ""
    },
    {title: "Result of predicting severe OSA patients",
    url: require("./img/graduated/Figure3.png"),
    content: "Got threshold from training data (80 people) and testing remainning"
    }

]
const Styles = styled.div`
  .carousel-caption {
    padding: 20px 50px;
    width:600px;
    background: #00FFFF;
    opacity: 0.6;
    position:relative;
    left: 160px;
    
  }
  .carousel{
    position:relative;
    left: 70px;
  }
  .carousel-item{
    position:relative;
    left: 110px;
  }
  .carousel-control-prev, .carousel-control-next{
      background-color: pink;
      width:50px;
      height:50px;
      border-radius:100%;
      opacity:0.5;
      top: calc(50%)
  }
  
  .carousel-control-next{
      right:calc(50px)
  }
`;
export const GR= () =>(
<Styles>
    <Carousel>
    {photo.map((e) => {
        return(
            <Carousel.Item>
                <img className="d-block w-75" src={e.url}/>
                <Carousel.Caption>
                  <h3>{e.title}</h3>
                  <p>{e.content}</p>
                </Carousel.Caption>
           </Carousel.Item>
        )
    })}
  
</Carousel> 
</Styles>      
)

