import React from 'react';
import { 
  Row,
  Col
} from 'react-bootstrap'
import { InstagramIcon } from './icons';

import './layout.css';

const About = () => (
<Row className="about-zone">
  <Col lg={{ span:8, offset: 2}}>
    <a id="about">
      <h1 className='text-center'>About Me</h1>
    </a>
    <p>Many of my paintings illuminate the idea of human existence being more than being alive and
living on a planet. Society has conditioned us to think that existing is all about breathing air on
this planet and contributing to your society. But by expanding your mind and understanding,
there’s more than just one plane in this universe</p>
    <p>I am currently attending the Pacific Northwest College of Art and currently working
on my Bachelor’s degree in Painting. Some of my artistic inspirations are Frida Kahlo, Henri Matisse, and Robert Wyland. </p>
    <div className="text-center">
    <InstagramIcon scale={3}/>

    </div>
  </Col>
</Row>

)

export default About;