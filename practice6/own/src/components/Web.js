import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
const photo=  [
    {title: "todoList",
    url: require("./img/Web/todoList.gif"),
    content: "using React.js module"
    },
    {title: "Calculator",
    url: require("./img/Web/Calu.gif"),
    content: "using React.js module"
    },
    {title: "flappybird",
    url: require("./img/Web/flappybird.gif"),
    content: "using p5.js module"
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
export const Web= () =>(
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

