import React from 'react'

import {alfabeto} from '../../../utils'
import {useGlossary} from '../../../context'
import styles from './styles.css'
import {getStorageCurrentLetter, setStorageCurrentLetter} from "../../../context/utils";

export const Alphabet = () => {
	const {setFilteredTerms} = useGlossary()

	const handleAlphabetClick = (letter: string) => {
		setFilteredTerms(letter)
		setStorageCurrentLetter(letter)
	}

	return (
		<div className={styles.containerAlphabet}>
			{alfabeto.map((letter: string, index: number) => (
				<button
					className={`${styles[letter === getStorageCurrentLetter() ?
						'termSelect' :
						'']}`}
					key={index}
					onClick={() => handleAlphabetClick(letter)}
				>
					{letter}
				</button>
			))}
		</div>
	)
}
