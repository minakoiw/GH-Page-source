import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as dayjs from 'dayjs';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  Col
} from 'react-bootstrap'
import "./layout.css"

const LandingPiece = () => {
  const dataLandingPiece = useStaticQuery(graphql`
  {
    allMdx(filter: {frontmatter: {is_landing: {eq: true}}}) {
      nodes {
        frontmatter {
          painting_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
          date
          dimensions
        }
        body
      }
    }
  }
  `);

  if (dataLandingPiece.allMdx.nodes.length !== 1) return null;
  const node = dataLandingPiece.allMdx.nodes[0];
  const image = getImage(node.frontmatter.painting_image);
  return (
    <>
      <Col sm={{span:6}} xs={{span:12}} md={{span:5, offset:1}}>
        <GatsbyImage image={image} layout="constrained" height={400} transformOptions={{fit:"contain"}} className="framed-artwork"/>
      </Col>
      <Col sm={{span:6}} xs={{span:12}} md={{span:5}}>
        <h2>{node.frontmatter.title}</h2>
        <p>{dayjs(node.frontmatter.date).format('MMMM D, YYYY')}</p>
        <MDXRenderer>{node.body}</MDXRenderer>
      </Col>
    </>
  )
}

export default LandingPiece;