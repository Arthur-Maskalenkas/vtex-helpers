import { type Actions } from './reducer.ts'
import { type ModelInternalListOptions } from './domain/models/modelInternalListOptions.ts'
import { type ModelListOptions } from './domain/models/modelListOptions.ts'
import { type AppInternalServices } from '../../../../services/main/app.ts'



export type GlobalActionProps<S, A> = {
		state: S
		action: A
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace internalListOptions {
		export type Items = Map<string, ModelInternalListOptions>
}

export namespace ListOptions {
		export type Items = ModelListOptions[]
}

export interface States {
		appInternalServices: TypeAppInternalServices
		isOpened: boolean
		currentComponent: Element | null
		currentTarget: string | null
		breadcrumb: string[]
		listOptions: ListOptions.Items
		query: string | null
		searchableListOptions: ListOptions.Items
		internalListOptions: internalListOptions.Items | null
}

export type TypeAppInternalServices = ReturnType<typeof AppInternalServices>
export type ReducerParams = GlobalActionProps<States, Actions>