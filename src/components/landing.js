import * as React from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'
import "./layout.css"

const Landing = () => (
  <Row className="landing-zone">
    <Col lg={{ span:8, offset: 2}}>
      <a id="landing"/>
      <p className="quote">&ldquo;I make art that feeds the soul as well as the mind&rdquo;</p>
    </Col>
  </Row>
)

export default Landing;