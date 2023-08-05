import React from 'react';
// @ts-ignore
import { SliderLayout } from 'vtex.slider-layout';
import styles from '../styles.css';
import { AllSectionsProps } from '../types/IHtmlRender';

interface ISliderProps {
  data: AllSectionsProps;
}

const SliderOne = (slider: ISliderProps) => {
  const infosSection = slider?.data;
  const pathImage = infosSection?.props?.children && infosSection?.props?.children[0]?.props?.images;

  return (
    <>
      <div className={styles.sliderOne}>
        <SliderLayout itemsPerPage={{ desktop: 1, mobile: 1 }} infinite showNavigationArrows="always" showPaginationDots="never" >
          {pathImage?.map((item) => {
            return <img className={styles.imgSlider} src={item.src} />;
          })}
        </SliderLayout>
      </div>
    </>
  );
};
export default SliderOne;
