import React from 'react'

import styles from './styles.css'

export const Breadcrumb = () => {
  return (
    <div className={styles.containerBreadcrumb}>
      <a href="/" className={styles.contentDesktop}>
        <span className={styles.home}>Home</span>
        <span>
          <img src="https://lojasmarabraz.vteximg.com.br/arquivos/icon-setinha-glossario.png" alt="Voltar" />
        </span>
        <span className={styles.currentPage}>A Marabraz</span>
      </a>

      <a href="/" className={styles.contentMobile}>
        <span>
          <img src="https://lojasmarabraz.vteximg.com.br/arquivos/icon-voltar-glossario.png" alt="Voltar" />
        </span>
        <span className={styles.back}>Voltar</span>
      </a>
    </div>
  )
}