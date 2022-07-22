import React from 'react';
import { 
  Row,
  Col
} from 'react-bootstrap'

import './layout.css';

const About = () => (
<Row className="about-zone">
  <Col lg={{ span:8, offset: 2}}>
    <a id="about"/>
    <h1>About Me</h1>
  </Col>
</Row>

)

export default About;