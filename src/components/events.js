import React from 'react';
import { 
  Row,
  Col
} from 'react-bootstrap'
import './layout.css'

const Events = () => (
<Row className="events-zone">
  <Col lg={{ span:8, offset: 2}}>
    <a id="events"/>
    <h1>Events</h1>
  </Col>
</Row>

)

export default Events;