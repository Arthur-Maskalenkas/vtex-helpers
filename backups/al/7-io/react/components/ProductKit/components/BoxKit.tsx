import React from "react";
import styles from './styles.css'

interface IProps {
  imageUrl:string;
  productName:string;
  sellingPrice:string
}

const BoxKit = ({ imageUrl, productName, sellingPrice }:IProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.box_image}>
        <img src={imageUrl} alt={productName} />
      </div>
      <div className={styles.box_name_value}>
        <p className={styles.kit_name}>{productName}</p>
        <p className={styles.kit_value}>{sellingPrice}</p>
      </div>
    </div>
  )
}

export default BoxKit