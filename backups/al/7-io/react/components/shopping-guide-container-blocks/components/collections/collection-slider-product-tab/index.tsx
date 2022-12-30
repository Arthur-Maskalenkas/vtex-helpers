import React from 'react'
import { __SCHEMA_SITE_EDITOR_DEFAULT_TAB } from '../../../../../context/_interfaces/_schemas'
import { Button, WordRenderer } from '../../common'
import { SliderLayout } from 'vtex.slider-layout'
import styles from './styles.css'
export type CollectionSliderProductTabProps = {
  currentTab: number,
  eachTabHave5Images: boolean,
  items: __SCHEMA_SITE_EDITOR_DEFAULT_TAB[]
}
export const CollectionSliderProductTab = ({ currentTab, eachTabHave5Images, items }: CollectionSliderProductTabProps) => {
  return (
    <div className={`${styles.containerBlockCollectionSliderProductTab} ${eachTabHave5Images ? styles.with5Images : styles.without5images}`}>

      {eachTabHave5Images
        ?
        (
          <SliderLayout infinite={true} fullWidth={true} showNavigationArrows={"never"} showPaginationDots='never'  {...(eachTabHave5Images ? { itemsPerPage: 2, centerMode: 'to-the-left' } : { itemsPerPage: 1 })}>
            {items?.[currentTab].items.map((item, index) => {
              return (

                <li key={index} className={styles.containerBlockCollectionProduct}>
                  <a href={item.href}>
                    <img className={styles.imageProduct} src={item?.srcMobile ?? item?.src ?? 'https://lojasmarabrazqa.vtexassets.com/arquivos/rentagulo-1.png'} alt={item.__editorItemTitle} />
                  </a>

                  <li>
                    <WordRenderer as='h3' variant='product'>
                      {item.__editorItemTitle}
                    </WordRenderer>
                    <WordRenderer as='p' variant='product'>
                      {item?.propsProduct}
                    </WordRenderer>
                    <Button variant='product' as='a' href={item.href}>
                      Ver todoss
                    </Button>
                  </li>
                </li>
              )
            })}
          </SliderLayout >
        )
        :
        (
          <li className={styles.containerBlockCollectionProduct}>
            <a href={items[currentTab].linkButton}>
              <img className={styles.imageProduct} src={items[currentTab]?.srcMobile ?? items[currentTab]?.src ?? 'https://lojasmarabrazqa.vtexassets.com/arquivos/banner-padrao-mobile-guia-de-compras.png'} alt={items[currentTab].__editorItemTitle} />
            </a>
            <Button className='seeMoreProducts' variant='product' as='a' href={items[currentTab]?.linkButton ?? '/'}>
              {items[currentTab]?.buttonText ?? "Ver Mais Sobre"}
            </Button>
          </li>
        )
      }
    </div>
  )
}