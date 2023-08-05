import React from 'react';
import styles from './styles.css';
import { AllSectionsProps } from './types/IHtmlRender';

interface IBoxVideoProps {
  data: AllSectionsProps;
}

const BoxVideo = (boxVideo: IBoxVideoProps) => {
  const linkVideo = boxVideo?.data?.props?.children && boxVideo?.data?.props?.children[0]?.props?.src;

  return (
    <>
      <iframe className={styles.containerVideo} width="auto" height="420" src={linkVideo}></iframe>
    </>
  );
};

export default BoxVideo;
