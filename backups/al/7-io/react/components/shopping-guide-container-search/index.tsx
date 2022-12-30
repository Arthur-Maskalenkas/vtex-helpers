import React from 'react'
import {useShoppingGuideContext} from '../../context'
import {ENUM_ACTIONS} from '../../context/reducer'
import {CollectionStepsInfo} from './components/collections/collection-steps-info'
import {Button} from './components/common'
import {HeaderLayout, LeftSideLayout, Result, RightSideLayout} from './components/index-components'

import {ToastConsumer, ToastProvider} from 'vtex.styleguide'


import styles from './styles.css'


export const ShoppingGuideContainerSearch = () => {
	const {
		verifyIfStepsIsFinished,
		dispathForm,
		dispatchStep,
		getCurrentStep
	} = useShoppingGuideContext()

	const handleSubmit = (e: React.FormEvent, showToast: any) => {
		try {
			e.preventDefault()

			let valuesChecked = []

			for (const element of e.target as any) {
				if (element.checked) {
					valuesChecked.push(element.value)
					element.checked = false
					showToast({message: `filtro ${element.value} adicionado com sucesso!`})
				}
			}

			if (!valuesChecked.length) {
				showToast({message: `Seleciona algum filtro para dar continuidade.`})

				return
			}

			const value = valuesChecked[0]

			dispathForm({
				__editorItemTitle: value,
				ProductFieldReference: value
			})


			dispatchStep(ENUM_ACTIONS.NEXT_STEP)
		} catch (error) {
			showToast({message: `Houve algum erro. Tente novamente mais tarde.`})
			console.error(error)

		}
	}


	return (
		<ToastProvider positioning="window">
			<ToastConsumer>
				{({showToast}: { showToast: any }) => (
					<div className={styles.containerShoppingGuideContainerSearch}>
						<HeaderLayout/>
						<div className={verifyIfStepsIsFinished ?
							styles.showElement :
							styles.hiddenElement
						}>
							<Result/>
						</div>
						<form onSubmit={e => handleSubmit(e, showToast)}
									className={`${styles.containerBottom} ${verifyIfStepsIsFinished ?
										styles.hiddenElement :
										styles.showElement
									}`}>
							<CollectionStepsInfo/>

							<div className={styles.containerContent}>
								{getCurrentStep && getCurrentStep.currentPosition >= 1 ?
									(
										<Button onClick={() => dispatchStep(ENUM_ACTIONS.PREVIOUS_STEP)} className='button-back'
														variant='secondary'>Voltar</Button>
									)
									:
									(
										<div className={styles.invisibleContainerShoppingGuide}/>
									)
								}

								<div className={styles.containerSides}>
									<LeftSideLayout/>
									<RightSideLayout/>
								</div>
							</div>

							<Button type='submit' className='button-next' variant='primary'>Próximo</Button>
						</form>
					</div>
				)}
			</ToastConsumer>
		</ToastProvider>
	)
}