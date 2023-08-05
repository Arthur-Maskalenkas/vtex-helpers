import React, {useEffect} from 'react';
import {useProduct} from 'vtex.product-context';
import TitlePage from './TitlePage';
import BoxVideo from './BoxVideo';
import SectionFour from './Sections/SectionFour';
import SectionThree from './Sections/SectionThree';
import SectionTwo from './Sections/SectionTwo';
import SliderOne from './Sliders/SliderOne';
import SliderTwo from './Sliders/SliderTwo';
import styles from './styles.css';
import SectionOne from './Sections/SectionOne';
import {IHtmlRender} from './types/IHtmlRender';


export const HtmlRender = () => {
  const productCtx = useProduct();
  const productID = productCtx?.product?.productId;
  const filterSpecificationCtx = productCtx?.product?.specificationGroups;

  // looking for premium description field
  const allSpecificationsTable = filterSpecificationCtx?.filter((el: {
    name: string
  }) => el.name === 'allSpecifications');
  const findPosition = allSpecificationsTable?.[0]?.specifications;
  const findJSON = findPosition?.find((elemento: { name: string }) => elemento.name === 'Descrição Produto Premium');

  // turning the file into json
  const transformingInJSON = JSON.parse(findJSON?.values[0] ?? '');
  if (!transformingInJSON || !findJSON) return <></>


  const componentsJSON: IHtmlRender = transformingInJSON?.page?.components;
  const titlePageInfos = componentsJSON[0]?.props;

  // Hook for insert class in body

  const useAddBodyClass = (className: string) => {
    useEffect(() => {
      document.body.classList.add(className);
      return () => {
        document.body.classList.remove(className);
      };
    }, [className]);
  };
  useAddBodyClass('body-pdp-premium');

  return (
    <div className={`${styles.containerGlobal} container-app-html-render no-reset-children`}>
      <TitlePage data={titlePageInfos}/>
      {componentsJSON?.map((item) => (
        <>
          {item?.name === 'section-one' && <SectionOne data={item}/>}
          {item?.name === 'section-two' && <SectionTwo data={item}/>}
          {item?.name === 'section-three' && <SectionThree data={item}/>}
          {item?.name === 'box-video' && <BoxVideo data={item}/>}
          {item?.name === 'section-four' && <SectionFour data={item}/>}
          {item?.name === 'box-slider-one' && <SliderOne data={item}/>}
          {item?.name === 'box-slider-Two' && <SliderTwo data={item}/>}
        </>
      ))}
    </div>
  );
};
