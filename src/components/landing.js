import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  Row,
  Col
} from 'react-bootstrap'
import "./layout.css"

const Landing = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          landingMessage
        }
      }
    }
  `)
  return (
    <Row className="landing-zone">
      <Col lg={{ span:8, offset: 2}}>
        <a id="landing"></a>
        <p className="quote">&ldquo;{data.site.siteMetadata.landingMessage}&rdquo;</p>
      </Col>
    </Row>
  )
}

export default Landing;