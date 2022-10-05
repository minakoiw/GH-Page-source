import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as dayjs from 'dayjs';
import {
  flexContainer, 
  artSide,
  descriptionSide,
  descriptionSideReverse,
  larger,
  smaller
} from './display-piece.module.css';

const DisplayPiece = ({artNode, displayReverse}) => {
  const image = getImage(artNode.frontmatter.painting_image);
  const { title, dimensions, date, materials } = artNode.frontmatter;
  const jsDate = dayjs(date);

  return (
    <div className={flexContainer}>
      <div className={artSide}>
        <GatsbyImage image={image} className="framed-artwork"/>
      </div>
      <div className={descriptionSide}>
        <div>
          <h2 className={larger}>{title}</h2>
          <p className={smaller}>{dimensions}</p>
          <p className={smaller}>{jsDate.format('MMMM D, YYYY')}</p>
          <p className={smaller}>{materials}</p>
        </div>
      </div>
    </div>
  )
}

export default DisplayPiece;