import { ENUM_ACTIONS } from "../reducer";

export type __SCHEMA_SITE_EDITOR_DEFAULT_GALLERY_5_IMAGES = {
	__editorItemTitle: string
	href: string
	src: string
	srcMobile?: string
	propsProduct?: string
}

export type __SCHEMA_SITE_EDITOR_DEFAULT_GALLERY_ONE_IMAGES = {
	__editorItemTitle: string
	href: string
	src: string
}

export type __SCHEMA_SITE_EDITOR_DEFAULT_TAB = {
	__editorItemTitle: string
	buttonText?: string
	linkButton?: string
	src?: string
	srcMobile?: string
	items: __SCHEMA_SITE_EDITOR_DEFAULT_GALLERY_5_IMAGES[] & __SCHEMA_SITE_EDITOR_DEFAULT_GALLERY_ONE_IMAGES[]
}

export type __SCHEMA_SITE_EDITOR_DEFAULT_BLOCKITEM = {
	__editorItemTitle: string
	eachTabHave5Images: boolean
	isActive: boolean
	description: string

	items: __SCHEMA_SITE_EDITOR_DEFAULT_TAB[]
}

export type __SCHEMA_SITE_EDITOR_DEFAULT_FILTER = {
	__editorItemTitle: string
	ProductFieldReferenceID: string
	ProductFieldReferenceValue?: string
	icone: string
}

export type __SCHEMA_SITE_EDITOR_DEFAULT_STEP = {
	__editorItemTitle: string
	title: string
	description: string
	items?: __SCHEMA_SITE_EDITOR_DEFAULT_FILTER[]
}

export type __SCHEMA_SITE_EDITOR_DEFAULT_DEPARTAMENT = {
	__editorItemTitle: string
	description: string
	departmentId?: string

	resultTitle: string
	resultDescription: string
	items?: __SCHEMA_SITE_EDITOR_DEFAULT_STEP[]
	blockItems?: __SCHEMA_SITE_EDITOR_DEFAULT_BLOCKITEM[]
}

export type __SCHEMA_SITE_EDITOR_DEFAULT_ROOT = {
	departamentList: __SCHEMA_SITE_EDITOR_DEFAULT_DEPARTAMENT[]
}

//
// ? Estados mesclados
//

export type MERGED_ACTIONS_STEPS =
	ENUM_ACTIONS.CURRENT_STEP
	| ENUM_ACTIONS.NEXT_STEP
	| ENUM_ACTIONS.PREVIOUS_STEP
	| ENUM_ACTIONS.GO_TO_STEP

export type MERGED_ACTIONS_ANSWER = Pick<__SCHEMA_SITE_EDITOR_DEFAULT_FILTER, '__editorItemTitle' | 'ProductFieldReferenceID' | 'ProductFieldReferenceValue'>

//
// ? Estados do schema após serem remapeados
//

export type __SCHEMA_SITE_EDITOR_MAPPED_DEPARTAMENT = {
	currentPosition: number
} & __SCHEMA_SITE_EDITOR_DEFAULT_DEPARTAMENT

export type __SCHEMA_SITE_EDITOR_MAPPED_STEP = {
	currentPosition: number
	answer?: MERGED_ACTIONS_ANSWER
} & __SCHEMA_SITE_EDITOR_DEFAULT_STEP

export type __SCHEMA__SITE_EDITOR_MAPPED_RESULT =
	{}
	& Pick<__SCHEMA_SITE_EDITOR_DEFAULT_DEPARTAMENT, 'resultTitle' | 'resultDescription'>
