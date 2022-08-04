import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  Row,
  Col
} from 'react-bootstrap'
import LandingPiece from './landing-piece'
import "./layout.css"

const Landing = () => {
  const dataMessage = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          landingMessage
        }
      }
    }
  `);

  return (
    <Row className="landing-zone">
      <Col lg={{ span:8, offset: 2}}>
        <a id="landing"></a>
        <p className="quote">&ldquo;{dataMessage.site.siteMetadata.landingMessage}&rdquo;</p>
      </Col>
      <LandingPiece className="landing-piece" />
    </Row>
  )
}

export default Landing;