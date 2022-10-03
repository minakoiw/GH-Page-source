import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  Row,
  Col
} from 'react-bootstrap'
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
    <>
      <Row className="landing-zone">
        <Col lg={{ span:10, offset: 1}}>
          <p className="quote">&ldquo;{dataMessage.site.siteMetadata.landingMessage}&rdquo;</p>
        </Col>
      </Row>
    </>
  )
}

export default Landing;