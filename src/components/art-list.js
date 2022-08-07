import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import DisplayPiece from './display-piece';
import './layout.css'
import {
  artList,
  artListItem
} from './art-list.module.css'

const ArtList = () => {
  const data = useStaticQuery(query);
  return (
    <ul className={artList}>
      {
        data.allMdx.nodes.map((node,i) => (
          <li className={artListItem}>
            <DisplayPiece artNode={node} displayReverse={i % 2 === 1 ? true : false} />
          </li>
        ))
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