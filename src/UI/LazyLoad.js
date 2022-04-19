import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoad = ({ src, altText, classText = '', scrollPosition }) => (
  <LazyLoadImage
    alt={altText}
    effect="blur"
    src={src}
    className={classText} 
    scrollPosition={scrollPosition}
    />
);

//export default LazyLoad
export default trackWindowScroll(LazyLoad);