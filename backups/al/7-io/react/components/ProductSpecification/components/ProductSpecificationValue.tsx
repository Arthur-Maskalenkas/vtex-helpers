import React from "react";
import styles from './styles.css'

interface IProps {
  values: string[]
}

const ProductSpecificationValue = ({ values }:IProps) => {
  return (
    <div className={styles.containerValue}>
      <p className={styles.specificationTextValue}>{values}</p>
    </div>
  )
}

export default ProductSpecificationValue