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
  const sortedNodes = data.allMdx.nodes.sort((nodeA, nodeB) =>(new Date(nodeB.frontmatter.date).getTime() - new Date(nodeA.frontmatter.date).getTime()))
  return (
    <ul className={artList}>
      {
        sortedNodes.map((node,i) =>  (
          <li className={artListItem} key={node.id}>
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
          materials
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