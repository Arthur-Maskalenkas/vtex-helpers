import type {ReactNode} from 'react'

import type {BrandTerm, CategoryTerm, Filter, GlossaryReducerProps, Term,} from './reducer'
import {glossaryInitialState} from './reducer'

export type GlossaryProviderProps = {
	children: ReactNode
}

export type GlossaryContextProps = {
	setFilteredTerms: (term: string) => void
	setFilter: (filter: Filter) => void
	getGlossary: () => GlossaryReducerProps
}

export const valuesTheContextGlossaryReturnsByDefault: GlossaryContextProps = {
	getGlossary: () => glossaryInitialState,
	setFilteredTerms: () => null,
	setFilter: () => null,
}

export const filterTerm = (
	termToFilter: string,
	terms: Term[] | BrandTerm[] | CategoryTerm[]
) =>
	terms
		.filter(value => value?.name[0].toLowerCase() === termToFilter)
		.sort((a, b) => a.name.localeCompare(b.name))


export const setStorageCurrentLetter = (letter: string) => {
	window.localStorage.setItem('glossaryCurrentLetter', letter)
}

export const getStorageCurrentLetter = () => {
	return window.localStorage.getItem('glossaryCurrentLetter')
}
