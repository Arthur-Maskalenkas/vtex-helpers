import React from 'react';
import styles from '../styles.css';
import ImageSources from './ImageSources';
import { AllSectionsProps } from '../types/IHtmlRender';

interface ISectionProps {
  data: AllSectionsProps;
}

const SectionTwo = (section: ISectionProps) => {
  const infosSection = section?.data?.props;
  const backgroundSectionTwo = infosSection?.backgroundColor;
  const childrenSectionTwo = infosSection?.children && infosSection?.children[1]?.props;

  // textos descritivos
  const textsSectionTwo = infosSection?.children && infosSection?.children[0]?.props?.content;
  const titleSectionTwo = textsSectionTwo?.title;
  const descriptionSectionTwo = textsSectionTwo?.description;
  console.log(`🚀 ~ file: SectionTwo.tsx:19 ~ SectionTwo ~ descriptionSectionTwo:`, descriptionSectionTwo)

  if (!childrenSectionTwo) return <></>;

  return (
    <>
      <div className={styles.containerSectionTwo} style={{ background: backgroundSectionTwo }}>
        <div>
          <p className={styles.titleSectionTwo}>{titleSectionTwo}</p>
          <p className={styles.descriptionSectionTwo}>{descriptionSectionTwo}</p>
        </div>
        <ImageSources children={childrenSectionTwo} />
      </div>
    </>
  );
};

export default SectionTwo;
