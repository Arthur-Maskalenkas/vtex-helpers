import React from "react";
import styles from './styles.css'
// @ts-ignore
import spinner from './spinner.svg'

export const Loader = () => {
  return (
    <img className={styles.loadingIcon} src={spinner} alt='Carregando' />
  )
}
export default Loader
