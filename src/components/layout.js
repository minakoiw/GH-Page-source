import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`);

  return (
    <div>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      {/* <header>{data.site.siteMetadata.title}</header> */}
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#home">{data.site.siteMetadata.title}</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#exhibitions">
              Exhibitions
            </Nav.Link>
            <Nav.Link href="#about">
              About
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Container fluid>
              {children}
        </Container>
      </main>
    </div>
  )
}

export default Layout