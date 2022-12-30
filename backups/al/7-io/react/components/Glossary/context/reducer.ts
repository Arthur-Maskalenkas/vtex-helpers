import type {Omit} from 'react-intl'

export type Term = {
	name: string
	id: number
	__typename: string
}

export type BrandTerm = {
	slug?: string
} & Term

export type CategoryTerm = {
	children?: Term[]
	href?: string
} & Term

export type Filter = 'Categorias' | 'Marcas'

export type GlossaryReducerProps = {
	brandTermsWithoutFilter: BrandTerm[]
	brandsTermsFiltereds: BrandTerm[]
	categoryTermsWithoutFilter: CategoryTerm[]
	categoryTermsFiltereds: CategoryTerm[]
	isLoading: boolean
	currentFilter: Filter
}

export const glossaryInitialState: GlossaryReducerProps = {
	brandTermsWithoutFilter: [],
	brandsTermsFiltereds: [],
	categoryTermsWithoutFilter: [],
	categoryTermsFiltereds: [],
	isLoading: true,
	currentFilter: 'Categorias',
}

export type GlossaryActions =
	| {
	type: 'SET_GLOSSARY_INITIAL_DATA_AFTER_FETCH'
	payload: Omit<GlossaryReducerProps, 'currentFilter'>
}
	| {
	type: 'SET_GLOSSARY_CURRENT_FILTERED_TERMS'
	payload: Pick<GlossaryReducerProps,
		'categoryTermsFiltereds' | 'brandsTermsFiltereds'>
}
	| {
	type: 'SET_GLOSSARY_CURRENT_FILTER'
	payload: Pick<GlossaryReducerProps, 'currentFilter'>
}

export const glossaryReducer = (
	state: GlossaryReducerProps,
	action: GlossaryActions
): GlossaryReducerProps => {
	switch (action.type) {
		case 'SET_GLOSSARY_INITIAL_DATA_AFTER_FETCH':
			return {
				...state,
				brandTermsWithoutFilter: action.payload.brandTermsWithoutFilter,
				categoryTermsWithoutFilter: action.payload.categoryTermsWithoutFilter,
				brandsTermsFiltereds: action.payload.brandsTermsFiltereds,
				categoryTermsFiltereds: action.payload.categoryTermsFiltereds,
				isLoading: action.payload.isLoading,
			}

		case 'SET_GLOSSARY_CURRENT_FILTER':
			return {
				...state,
				currentFilter: action.payload.currentFilter,
			}

		case 'SET_GLOSSARY_CURRENT_FILTERED_TERMS':
			return {
				...state,
				categoryTermsFiltereds: action.payload.categoryTermsFiltereds,
				brandsTermsFiltereds: action.payload.brandsTermsFiltereds,
			}

		default:
			return state
	}
}
