import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
//import * as dayjs from 'dayjs';
import { 
  Row,
  Col,
} from 'react-bootstrap'
import {
  eventsList,
  eventsListItem,
  eventTitleStyle,
  locationStyle,
  anchorStyle,
  noMargins
} from './events.module.css'

const linkMarkup = (links) => {
  if (!links || !links.length) return null;
  return links.map((link) => (
    <p key={link} className={noMargins}><a className={anchorStyle} href={link}>{link}</a></p>
  ));
}

const Events = () => {
  const data = useStaticQuery(query);
  // const events = data.allMdx.nodes.filter((mdx) => (mdx.frontmatter.mdxType === "event" && !mdx.frontmatter.doNotPost))
  return (
    <Row>
      <Col lg={{ span:10, offset: 1}} md={{span:12, offset: 0}}>
        <ul className={eventsList}>
          {
            data.allMdx.nodes.map(node => {
              const {title, locationName, address1, city, state, zip, links} = node.frontmatter;
              return (
              <li key={node.id} className={eventsListItem}>
                <h3 className={eventTitleStyle}>{title}</h3>
                <span className={locationStyle}>{locationName}, {address1}, {city}, {state}, {zip}</span>
                {linkMarkup(links)}
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
          links
        }
        body
      }
    } 
  }`


export default Events;