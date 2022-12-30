import React from 'react'
import { __SCHEMA_SITE_EDITOR_DEFAULT_TAB } from '../../../../../context/_interfaces/_schemas'
import { Button, WordRenderer } from '../../common'


import styles from './styles.css'

export type CollectionProductTabProps = {
  currentTab: number,
  eachTabHave5Images: boolean,
  items: __SCHEMA_SITE_EDITOR_DEFAULT_TAB[]
}

export const CollectionProductTab = ({
  currentTab,
  eachTabHave5Images,
  items
}: CollectionProductTabProps) => {
  return (
    <div className={`${styles.containerBlockCollectionProductTab} ${eachTabHave5Images ?
      styles.with5Images :
      styles.without5images}`}>

      {eachTabHave5Images
        ?
        (
          items[currentTab].items.map((item, index) => {
            return (
              <li key={index} className={styles.containerBlockCollectionProduct}>
                <>
                  <a href={item.href}>
                    <img className={styles.imageProduct} src={item.src} alt={item.__editorItemTitle} />
                  </a>
                  <WordRenderer as='h3' variant='product'>
                    {item.__editorItemTitle}
                  </WordRenderer>
                  <WordRenderer as='p' variant='product'>
                    {item?.propsProduct}
                  </WordRenderer>
                  <Button variant='product' as='a' href={item.href}>
                    Ver todos
                  </Button>
                </>
              </li>
            )
          })
        )
        :
        (

          <>
            <a href={items[currentTab].linkButton}>
              <img className={styles.imageProduct} src={items[currentTab]?.src ?? 'https://lojasmarabrazqa.vtexassets.com/arquivos/banner-padrao-desktop-guia-de-compras.png'} alt={items[currentTab].__editorItemTitle} />
            </a>
            <Button className='seeMoreProducts' variant='product' as='a' href={items[currentTab]?.linkButton ?? '/'}>
              {items[currentTab]?.buttonText ?? "Ver Mais Sobre"}
            </Button>
          </>
        )
      }
    </div>
  )
}