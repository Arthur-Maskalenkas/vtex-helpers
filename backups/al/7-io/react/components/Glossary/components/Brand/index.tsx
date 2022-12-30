import React from 'react'

import type {BrandTerm} from '../../context/reducer'
import {useGlossary} from '../../context'
import styles from './styles.css'
import {Link} from '../atoms/Link'
import {MessageError} from "../atoms/MessageError";

export const BrandContainer = () => {
	const {getGlossary} = useGlossary()

	const {brandsTermsFiltereds} = getGlossary()

	const separar = (itens: any, maximo: any) => {
		return itens.reduce((acumulador: any, item: any, indice: any) => {
			const grupo = Math.floor(indice / maximo)

			acumulador[grupo] = [
				...(acumulador[grupo] || []),
				item
			]

			return acumulador
		}, [])
	}

	return (
		<div className={styles.containerBrand}>
			{brandsTermsFiltereds.length > 0 ?
				(
					<>
						{separar(brandsTermsFiltereds, brandsTermsFiltereds.length / 5).map(
							(termContainer: any, index: number) => {
								return (
									<li key={index}>
										<div className={styles.containerTermsBrand}>
											{termContainer.map((term: BrandTerm) => {
												return (
													<Link href={term.slug || '/'} key={term.id}>
														{term.name}
													</Link>
												)
											})}
										</div>
									</li>
								)
							}
						)}
					</>
				) :
				(
					<>
						<MessageError/>
					</>
				)
			}
			<ul>

			</ul>
		</div>
	)
}
