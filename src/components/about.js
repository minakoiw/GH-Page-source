import React from 'react';
import { 
  Row,
  Col
} from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image';
import { InstagramIcon } from './icons';

import './layout.css';
import { 
  aboutZone,
  aboutInstagram,
  socialMedia
} from './about.module.css';

const About = () => (
<Row className={aboutZone}>
  <Col sm={12} md={4}>
    <div className="text-center">
      <StaticImage src="../images/in-the-gallery.jpg" alt="selfie" />
    </div>
  </Col>
  <Col sm={12} md={8}>
    <p>Many of my paintings illuminate the idea of human existence being more than being alive and
living on a planet. Society has conditioned us to think that existing is all about breathing air on
this planet and contributing to your society. But by expanding your mind and understanding,
there’s more than just one plane in this universe</p>
    <p>I am currently attending the <a href="https://pnca.willamette.edu">Pacific Northwest College of Art</a> and currently working
on my Bachelor’s degree in Painting. Some of my artistic inspirations are Frida Kahlo, Henri Matisse, and Robert Wyland. </p>
  </Col>
  <Col md={{ span:10, offset: 1}}>
    <div id={socialMedia} className="text-center">
      <h3>Connect with my work</h3>
      <a className={aboutInstagram} href="https://instagram.com/minartko"><InstagramIcon scale={3} style={{margin:"2em 0"}}/></a>
    </div>
  </Col>
</Row>

)

export default About;