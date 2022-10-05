import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css";

const Layout = ({ children, layoutClass }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`);

  return (
    <div id="mainLayout" className={layoutClass}>
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="/">{data.site.siteMetadata.title}</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/about">
              About
            </Nav.Link>
            <Nav.Link href="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link href="/cv">
              CV
            </Nav.Link>
            <Nav.Link href="/exhibitions">
              Exhibitions
            </Nav.Link>
            <Nav.Link href="/contact">
              Contact
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Container fluid>
              {children}
        </Container>
        <footer className="pt-4 my-md-5 pt-md-5 text-center">
          &copy; Copyright 2022 - Minako Williams, all rights reserved        
        </footer>
      </main>
    </div>
  )
}


export default Layout