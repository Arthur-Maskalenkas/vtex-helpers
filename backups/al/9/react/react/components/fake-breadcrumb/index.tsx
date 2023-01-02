import React from 'react'
import styles from './styles.css'

export const FakeBreadcrumb = ({currentPage}: { currentPage: string }) => {
	return (
		<div className={styles.containerBreadcrumb}>
			<a href="/Users/Public" className={styles.content}>
				Home
			</a>
			<span>
          <img src="https://lojasmarabraz.vteximg.com.br/arquivos/icon-setinha-glossario.png" alt="Voltar"/>
        </span>
			<span className={styles.currentPage}>{currentPage}</span>
		</div>
	)
}