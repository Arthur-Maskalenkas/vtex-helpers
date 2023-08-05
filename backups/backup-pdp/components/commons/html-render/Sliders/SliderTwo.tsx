import React from 'react';
// @ts-ignore
import { SliderLayout } from 'vtex.slider-layout';
import styles from '../styles.css';
import { AllSectionsProps } from '../types/IHtmlRender';

interface ISliderProps {
  data: AllSectionsProps;
}

const SliderTwo = (slider: ISliderProps) => {
  const infosSection = slider?.data?.props;
  const pathImage = infosSection?.children && infosSection?.children[0]?.props?.images;

  if (!pathImage) return <></>;

  return (
    <>
      <div className={styles.sliderTwo}>
        <SliderLayout itemsPerPage={{ desktop: 1, mobile: 1 }} infinite showNavigationArrows="always" showPaginationDots="never">
          {pathImage.map((item) => {
            return <img className={styles.imgSlider} src={item.src} />;
          })}
        </SliderLayout>
      </div>
    </>
  );
};
export default SliderTwo;
