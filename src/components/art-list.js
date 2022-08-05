import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './layout.css'
import './art-list.css'

const reverseClass = (i) => {
  if (i % 2 === 0) return 'flex-reverse';
  return ''
}

const ArtList = () => {
  const data = useStaticQuery(query);
  console.log('in PaintingCarousel')
  return (
    <ul className="art-list">
      {
        data.allMdx.nodes.map((node, i) => {
          const image = getImage(node.frontmatter.painting_image);
          return (
            <li key={node.id}>
              <div className={`flex-container ${reverseClass(i)}`}>
                <GatsbyImage image={image} className="framed-artwork"/>
                <div className='text-white art-description'>
                  <MDXRenderer>{node.body}</MDXRenderer>
                </div>
              </div>
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

export default ArtList;