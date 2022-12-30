import React from 'react'
import styles from './styles.css'

export const MessageError = () => {
	return (
		<div className={styles.containerMessageError}>
			<span className={styles.messageError}>
				Não foram encontrados resultados para sua busca!
			</span>
		</div>
	)
}
