import React from 'react';
import styles from '../styles.css';
import ImageSources from './ImageSources';
import { AllSectionsProps } from '../types/IHtmlRender';

interface ISectionProps {
  data: AllSectionsProps;
}

const SectionOne = (section: ISectionProps) => {
  const infosSection = section?.data?.props;
  const backgroundSectionOne = infosSection?.backgroundColor;
  const childrenSectionOne = infosSection?.children && infosSection?.children[0]?.props;

  //textos descritivos
  const textsSectionOne = infosSection?.children && infosSection?.children[1]?.props?.content;
  const titleSectionOne = textsSectionOne?.title;
  const descriptionSectionOne = textsSectionOne?.description;
  console.log(`🚀 ~ file: SectionOne.tsx:19 ~ SectionOne ~ descriptionSectionOne:`, descriptionSectionOne)

  if (!childrenSectionOne) return <></>;

  return (
    <>
      <div className={styles.containerSectionOne} style={{ background: backgroundSectionOne }}>
        <div>
          <h2 className={styles.titleSectionOne}>{titleSectionOne}</h2>
          <p className={styles.descriptionSectionOne}>{descriptionSectionOne}</p>
        </div>

        <div>
          <ImageSources children={childrenSectionOne} />
        </div>
      </div>
    </>
  );
};

export default SectionOne;
