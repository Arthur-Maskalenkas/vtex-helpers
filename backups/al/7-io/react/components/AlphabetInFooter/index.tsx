import React from 'react'
import {alfabeto} from "../Glossary/utils";
import {setStorageCurrentLetter} from "../Glossary/context/utils";
import styles from './styles.css'

export const AlphabetInFooter = () => {

	const handleAlphabetClick = (letter: string) => {
		setStorageCurrentLetter(letter)

		window.location.href = '/glossario'
	}

	return (
		<div className={styles.containerAlphabetInFooter}>
			<p className={styles.titleApp}>Glossário</p>

			<ul>
				{alfabeto.map((letter: string, index: number) => (
					<li>
						<button
							key={index}
							aria-label={"Ir para Glossário"}
							onClick={() => handleAlphabetClick(letter)}
						>
							{letter}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
