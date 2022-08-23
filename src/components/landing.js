import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  Row,
  Col
} from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image';
import LandingPiece from './landing-piece'
import "./layout.css"

const selfieCss = {
  height: '85px',
  width: '120px', 
  margin: "0 2.5em", 
  objectFit: 'cover'
}

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
    <>
      <Row>
        <Col lg={{ span: 1}}>
          <StaticImage src="../images/selfie.jpg" alt="selfie" style={selfieCss} />
        </Col>
      </Row>
      <Row className="landing-zone">
        <Col lg={{ span:8, offset: 2}}>
          <a id="landing"></a>
          <p className="quote">&ldquo;{dataMessage.site.siteMetadata.landingMessage}&rdquo;</p>
        </Col>
        <LandingPiece className="landing-piece" />
      </Row>
    </>
  )
}

export default Landing;