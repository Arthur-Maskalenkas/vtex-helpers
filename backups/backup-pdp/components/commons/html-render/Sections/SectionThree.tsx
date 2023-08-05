import React from 'react';
import styles from '../styles.css';
import ImageSources from './ImageSources';
import { AllSectionsProps } from '../types/IHtmlRender';

interface ISectionProps {
  data: AllSectionsProps;
}

const SectionThree = (section: ISectionProps) => {
  const childrenSectionThree = section?.data?.props?.children && section?.data?.props?.children[0]?.props;

  if (!childrenSectionThree) return <></>;

  return (
    <>
      <div className={styles.containerSectionThree}>
        <ImageSources children={childrenSectionThree} />
      </div>
    </>
  );
};

export default SectionThree;
