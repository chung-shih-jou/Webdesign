import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
const photo=  [
    {title: "Bilateral Filter",
    url: require("./img/CV/HW1_process.png"),
    content: "including spatial and range kernel which weights are larger if the neighbor pixel has similar intensity to the center pixel"
    },
    {title: "Result of BF in color pattern",
    url: require("./img/CV/HW1_result.png"),
    content: "different RGB weight result and find top 3"
    },
    {title: "Result of BF in color pattern",
    url: require("./img/CV/HW1_result2.png"),
    content: "left-top of gray pattern is control group"
    },
    {title: "Feature Detection and Matching",
    url: require("./img/CV/HW2_process.png"),
    content: "PCA (principle component analysis) and LDA (linear discriminant analysis)"
    },
    {title: "Machine Learning",
    url: require("./img/CV/HW2_process2.png"),
    content: "Keras & Tensorflow"
    },
    {title: "Projective Geometry",
    url: require("./img/CV/HW3_result.png"),
    content: "Recap of Homography"
    },
    {title: "Projective Geometry",
    url: require("./img/CV/HW3_result2.png"),
    content: "Recap of Homography"
    },
    {title: "Projective Geometry",
    url: require("./img/CV/HW3_result3.png"),
    content: "Recap of Homography"
    },
    {title: "Stereo matching",
    url: require("./img/CV/HW4_result.png"),
    content: ""
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
export const CV= () =>(
<Styles>
    <Carousel>
    {photo.map((e) => {
        return(
            <Carousel.Item>
                <img className="d-block w-75 .text-white" src={e.url}/>
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

