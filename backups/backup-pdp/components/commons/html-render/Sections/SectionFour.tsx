import React from 'react';
import styles from '../styles.css';
import ImageSources from './ImageSources';
import { AllSectionsProps } from '../types/IHtmlRender';

interface ISectionProps {
  data: AllSectionsProps;
}

const SectionFour = (section: ISectionProps) => {
  const childrenSectionFour = section?.data?.props?.children && section?.data?.props?.children[0]?.props;

  if (!childrenSectionFour) return <></>;

  return (
    <>
      <div className={styles.containerSectionFour}>
        <ImageSources children={childrenSectionFour} />
      </div>
    </>
  );
};
export default SectionFour;
