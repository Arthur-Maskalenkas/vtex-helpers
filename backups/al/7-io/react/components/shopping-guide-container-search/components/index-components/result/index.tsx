import React from 'react'
import {useShoppingGuideContext} from '../../../../../context'
import {CollectionResult} from '../../collections/collection-result'
import {Button, RenderIcons, WordRenderer} from '../../common'
import styles from './styles.css'

export const Result = () => {
	const {
		getStepList,
		getCurrentDepartament,
		dispathReset
	} = useShoppingGuideContext()

	const answersList = getStepList?.map((step) => ({answer: step.answer}))
	console.log(getCurrentDepartament?.departmentId)

	return (
		<div className={styles.containerResultLayout}>
			<div className={styles.containerResultLeftSide}>

				<Button onClick={() => dispathReset()} className='reset-button' variant='secondary'>Refazer teste</Button>

				<WordRenderer>
					{getCurrentDepartament?.resultTitle}
				</WordRenderer>

				<WordRenderer as='text'>
					{getCurrentDepartament?.resultDescription}
				</WordRenderer>

				<CollectionResult items={answersList?.map((answer) =>
					({
						icon: <RenderIcons variant='primary' name='Couch'/>,
						label: answer.answer?.__editorItemTitle || ''
					}))}/>
			</div>

			<div className={styles.containerResultRightSide}>

				{/* uma div */}
			</div>
		</div>
	)
}