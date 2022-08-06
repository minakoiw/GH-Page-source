import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as dayjs from 'dayjs';
import './layout.css'
import './art-list.css'

const reverseClass = (i) => {
  if (i % 2 === 1) return 'flex-reverse';
  return ''
}

const ArtList = () => {
  const data = useStaticQuery(query);
  return (
    <ul className="art-list">
      {
        data.allMdx.nodes.map((node, i) => {
          const image = getImage(node.frontmatter.painting_image);
          const { title, dimensions, date } = node.frontmatter;
          const jsDate = dayjs(date);
          return (
            <li key={node.id}>
              <div className={`flex-container ${reverseClass(i)}`}>
                <div className="art-side">
                  <GatsbyImage image={image} className="framed-artwork"/>
                </div>
                <div className='description-side'>
                  <div className='text-white art-description'>
                    <h2>{title}</h2>
                    <p>{jsDate.format('MMMM D, YYYY')}</p>
                    <p>{dimensions}</p>
                    <MDXRenderer>{node.body}</MDXRenderer>
                  </div>
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
          dimensions
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