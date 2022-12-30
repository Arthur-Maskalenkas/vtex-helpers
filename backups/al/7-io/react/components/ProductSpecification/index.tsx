import React from 'react';
import { useProduct } from 'vtex.product-context';
import ProductSpecificationName from './components/ProductSpecificationName';
import ProductSpecificationValue from './components/ProductSpecificationValue';
import { SanitizedHTML } from "vtex.store-components"
import { allowedAttributes, allowedTags } from './utils'
import styles from './styles.css'

const ProductSpecification = () => {
  const productContext = useProduct();
  const productSpecificationGroups = productContext?.product?.specificationGroups
  return (
    <>
      {productSpecificationGroups && productSpecificationGroups?.length > 0 &&
        productSpecificationGroups?.map((item, index) => {
          const itemName = item?.name.toLocaleLowerCase()
          if (itemName === "allspecifications") return
          if (itemName === "pontos fortes") {
            return (
              <div key={index} className={styles.containerMain}>
                <div className={styles.containerNameSpecification}>
                  <p className={styles.titleNameSpecification}>{item?.name}</p>
                </div>
                <div className={styles.containerSpecification}>
                  {item?.specifications?.map((e, index) => {
                    return (
                      <div key={index} className={styles.contentSpecification}>
                        <SanitizedHTML
                          content={e?.name}
                          allowedTags={allowedTags}
                          allowedAttributes={allowedAttributes}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }
          else if (itemName === "manual") {
            return (
              <div key={index} className={styles.containerMain}>
                <div className={styles.containerNameSpecification}>
                  <p className={styles.titleNameSpecification}>{item?.name}</p>
                </div>
                <div className={styles.containerSpecification}>
                  {item?.specifications?.map((e, index) => {
                    const link = e?.values[0]
                    return (
                      <div key={index} className={styles.contentSpecification}>
                        <a className={styles.containerButton} href={link} target="blank">
                          Baixar manual
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }
          else {
            return (
              <div key={index} className={styles.containerMain}>
                <div className={styles.containerNameSpecification}>
                  <p className={styles.titleNameSpecification}>{item?.name}</p>
                </div>
                <div className={styles.containerSpecification}>
                  {item?.specifications?.map((e, index) => {
                    const values = e?.values?.map(e => e)
                    return (
                      <div key={index} className={styles.contentSpecification}>
                        <ProductSpecificationName name={e?.name} />
                        <ProductSpecificationValue values={values} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }
        })}
    </>
  )
}

export default ProductSpecification;
