import React from 'react'

import {useGlossary} from './context'
import {BrandContainer} from './components/Brand'
import {Filter} from './components/atoms/Filters'
import {Alphabet} from './components/atoms/Alphabet'
import {CategoriesContainer} from './components/Categories'
import styles from './styles.css'
import {Loading} from './components/atoms/Loading'
import {FakeBreadcrumb} from "../fake-breadcrumb";

export const Glossary = () => {
	const {
		getGlossary,
	} = useGlossary()

	const {
		isLoading,
		currentFilter
	} = getGlossary()

	return (
		<div className={styles.containerGlossary}>
			<FakeBreadcrumb currentPage={"Glossario"}/>
			{isLoading ?
				(
					<Loading/>
				) :
				(
					<>
						<Filter/>
						<Alphabet/>

						{currentFilter === 'Marcas' ?
							(
								<BrandContainer/>
							) :
							(
								<CategoriesContainer/>
							)}
					</>
				)}
		</div>
	)
}
