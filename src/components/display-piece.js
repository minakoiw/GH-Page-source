import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as dayjs from 'dayjs';
import {
  flexContainer, 
  flexContainerReverse,
  artSide,
  descriptionSide,
  descriptionSideReverse
} from './display-piece.module.css';

const DisplayPiece = ({artNode, displayReverse}) => {
  const image = getImage(artNode.frontmatter.painting_image);
  const { title, dimensions, date } = artNode.frontmatter;
  const jsDate = dayjs(date);

  return (
    <div className={displayReverse ? flexContainer : flexContainerReverse}>
      <div className={artSide}>
        <GatsbyImage image={image} className="framed-artwork"/>
      </div>
      <div className={!displayReverse ? descriptionSideReverse : descriptionSide}>
        <div>
          <h2>{title}</h2>
          <p>{jsDate.format('MMMM D, YYYY')}</p>
          <p>{dimensions}</p>
          <MDXRenderer>{artNode.body}</MDXRenderer>
        </div>
      </div>
    </div>
  )
}

export default DisplayPiece;