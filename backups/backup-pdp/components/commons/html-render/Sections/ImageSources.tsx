import React from 'react';
import styles from '../styles.css';
import { Props2 } from '../types/IHtmlRender';

interface ImageProps {
  children: Props2;
}

const ImageSources = ({ children }: ImageProps) => {
  const pathImage = children?.images;

  const imageMobile = pathImage?.filter((element) => element.media === '(max-width: 480px)');
  const imageDesktop = pathImage?.filter((element) => element.media === '(min-width: 481px)');

  const imageMobileSrc = imageMobile && imageMobile[0]?.src;
  const imageDesktopSrc = imageDesktop && imageDesktop[0]?.src;

  return (
    <>
      <img className={styles.imgSectionOneMobile} src={imageMobileSrc} />
      <img className={styles.imgSectionOneDesktop} src={imageDesktopSrc} />
    </>
  );
};

export default ImageSources;
