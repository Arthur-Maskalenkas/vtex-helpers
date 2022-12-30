import React from "react";
import styles from './styles.css'

interface IProps {
  name: string
}

const ProductSpecificationName = ({ name }:IProps) => {
  return (
    <div className={styles.containerName}>
      <p className={styles.specificationTextName}>{name}</p>
    </div>
  )
}

export default ProductSpecificationName