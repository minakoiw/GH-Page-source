import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as dayjs from 'dayjs';
import { 
  Row,
  Col,
} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './events.css'

const Events = () => {
  const data = useStaticQuery(query);
  // const events = data.allMdx.nodes.filter((mdx) => (mdx.frontmatter.mdxType === "event" && !mdx.frontmatter.doNotPost))
  return (
    <Row className="events-zone">
      <Col lg={{ span:8, offset: 2}}>
        <a id="exhibitions">
          <h1 className="text-center">Exhibitions</h1>
        </a>
        <ul className="events-list ">
          {
            data.allMdx.nodes.map(node => {
              const {title, locationName, address1, city, state, zip} = node.frontmatter;
              const jsDate = dayjs(node.frontmatter.date);
              const date = dayjs().format('MMMM D, YYYY');
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
    allMdx(filter: {frontmatter:{mdxType:{eq:"event"}, doNotPost: {ne:true}}}) {
      nodes {
        id
        frontmatter {
          mdxType
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