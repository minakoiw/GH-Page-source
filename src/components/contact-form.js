import React, { useState} from 'react';
import { 
  Col,
  Row,
  Button,
  Form
} from 'react-bootstrap';
import {
  messageArea,
  formGroupStyle,
  h2Style,
  labelStyle
} from './contact-form.module.css';

const ContactForm = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  return (
    <Row>
      <Col md={{offset:1, span:10}} lg={{offset:2, span:8}}>
        <h2 className={h2Style}>Leave a Message</h2>
        <Form>
          <Form.Group controlId="name" className={formGroupStyle}>
            <Form.Label className={labelStyle}>Your Name:</Form.Label>
            <Form.Control type="text" value={name} onChange={(evt) => setName(evt.target.currentValue)}/>
          </Form.Group>
          <Form.Group controlId="email" className={formGroupStyle}>
            <Form.Label className={labelStyle}>Your Email:</Form.Label>
            <Form.Control type="text" value={email} onChange={(evt) => setEmail(evt.target.currentValue)}/>
          </Form.Group>
          <Form.Group controlId='message' className={formGroupStyle}>
            <Form.Label className={labelStyle}>Message:</Form.Label>
            <Form.Control type="text" className={messageArea} value={message} onChange={(evt) => setMessage(evt.target.currentValue)}/>
          </Form.Group>
          <Form.Group className="text-center">
            <Button className="btn btnPrimary" type='submit'>Send Message</Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>

  );
}

export default ContactForm;