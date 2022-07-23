import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { 
  Row,
  Col,
} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './events.css'

const Events = () => {
  const data = useStaticQuery(query);
  return (
    <Row className="events-zone">
      <Col lg={{ span:8, offset: 2}}>
        <a id="events">
          <h1 className="text-center">Events</h1>
        </a>
        <ul className="events-list ">
          {
            data.allMdx.nodes.map(node => {
              const {title, locationName, address1, city, state, zip, date} = node.frontmatter;
              return (
              <li key={node.id}>
                <Card >
                  <Card.Header as="h5">{title} - {date}</Card.Header>
                  <Card.Body>
                    {locationName}, {address1}, {city}, {state}, {zip}
                    <MDXRenderer>{node.body}</MDXRenderer>
                  </Card.Body>
                </Card>
              </li>
              )
            })
          }
        </ul>
      </Col>
    </Row>
  );

}

export const query = graphql`
  query {
    allMdx(sort: {order: ASC, fields: frontmatter___date}) {
      nodes {
        id
        frontmatter {
          date
          title
          state
          zip
          locationName
          address1
          city
          doNotPost
        }
        body
      }
    } 
  }`


export default Events;