import React, {createContext, useCallback, useContext, useReducer,} from 'react'
import {useQuery} from 'react-apollo'

import type {GlossaryContextProps, GlossaryProviderProps} from './utils'
import {
	filterTerm,
	getStorageCurrentLetter,
	setStorageCurrentLetter,
	valuesTheContextGlossaryReturnsByDefault
} from './utils'
import type {Filter, GlossaryReducerProps} from './reducer'
import {glossaryInitialState, glossaryReducer} from './reducer'
import GET_BRANDS_AND_CATEGORIES from '../../../graphql/brands-categories.gql'

export const GlossaryContext = createContext<GlossaryContextProps>(
	valuesTheContextGlossaryReturnsByDefault
)

const GlossaryProvider = ({children}: GlossaryProviderProps) => {
	const [glossary, dispathGlossary] = useReducer(
		glossaryReducer,
		glossaryInitialState
	)


	const getGlossary = useCallback((): GlossaryReducerProps => glossary, [
		glossary,
	])

	const setFilteredTerms = (term: string): void => {

		dispathGlossary({
			type: 'SET_GLOSSARY_CURRENT_FILTERED_TERMS',
			payload: {
				brandsTermsFiltereds: filterTerm(
					term,
					glossary.brandTermsWithoutFilter
				),
				categoryTermsFiltereds: filterTerm(
					term,
					glossary.categoryTermsWithoutFilter
				),
			},
		})
	}

	const setFilter = (filter: Filter): void => {
		dispathGlossary({
			type: 'SET_GLOSSARY_CURRENT_FILTER',
			payload: {
				currentFilter: filter,
			},
		})
	}

	useQuery(GET_BRANDS_AND_CATEGORIES, {
		onCompleted: data => {
			const firstLetter = getStorageCurrentLetter() || 'a'

			if (!getStorageCurrentLetter()) {
				setStorageCurrentLetter(firstLetter)
			}

			dispathGlossary({
				type: 'SET_GLOSSARY_INITIAL_DATA_AFTER_FETCH',
				payload: {
					brandTermsWithoutFilter: data.brands,
					categoryTermsWithoutFilter: data.categories,
					brandsTermsFiltereds: filterTerm(firstLetter, data.brands),
					categoryTermsFiltereds: filterTerm(firstLetter, data.categories),
					isLoading: false,
				},
			})
		},

	})

	return (
		<GlossaryContext.Provider
			value={{
				setFilteredTerms,
				setFilter,
				getGlossary
			}}
		>
			{children}
		</GlossaryContext.Provider>
	)
}

const useGlossary = () => useContext(GlossaryContext)

export {GlossaryProvider, useGlossary}

