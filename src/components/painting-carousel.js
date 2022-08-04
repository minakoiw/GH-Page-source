import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PaintingCarousel = () => {
  const data = useStaticQuery(query);
  console.log('in PaintingCarousel')
  return (
    <ul>
      {
        data.allMdx.nodes.map(node => {
          const image = getImage(node.frontmatter.painting_image);
          return (
            <li key={node.id}>
              <GatsbyImage image={image} style={{width: "100px"}}/>
              <MDXRenderer>{node.body}</MDXRenderer>
            </li>
          ) 
        })
      } 
    </ul>  
  )
}

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {mdxType: {eq: "painting"}}}) {
      nodes {
        id
        frontmatter {
          is_landing
          date
          title
          painting_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        body
      }
    } 
  }`

export default PaintingCarousel;