import { NotificationContext } from "../../notificationContext.ts";



export class ExternalModelRuntime extends NotificationContext {
		public readonly culture: ExternalModelRuntime.Culture
		public readonly pages: Record<string, ExternalModelRuntime.Pages>
		public readonly route: ExternalModelRuntime.Route
		public readonly accountId: string
		public readonly workspace: string
		public readonly account: string
		public readonly publicEndpoint: 'publicEndpoint' | null
		public readonly query: { data: string }
		public readonly serverQuery: { data: string }
		public readonly binding: ExternalModelRuntime.Binding

		constructor(args: Record<string, any> | null) {
				const {
						culture,
						pages,
						accountId,
						workspace,
						account,
						route,
						publicEndpoint,
						query,
						serverQuery,
						binding
				} = args ?? {}

				super()
				this.culture = culture
				this.pages = pages
				this.route = route
				this.accountId = accountId
				this.workspace = workspace
				this.account = account
				this.publicEndpoint = publicEndpoint
				this.query = query
				this.serverQuery = serverQuery
				this.binding = binding
		}

		public isValid() {
				if (!this.account) this.addNotification('Not found runtime', 'error')

				return this.hasNotifications()
		}


}

namespace Extension {
		export type Block = {
				blockId: string
				extensionPointId: string
				children: boolean
				blockRole: string
		}

		export type Props = Record<string, any>
}

namespace Route {
		export type PageContext = {
				id: string
				type: string
		}

		export type Params = {
				id: string
				department: string
				category: string
				subcategory: string
		}

		export type QueryString = {
				map: string
		}
}

export namespace ExternalModelRuntime {
		export type Pages = {
				allowConditions: boolean
				context: string
				declarer: string
				path: string
				routeId: string
				blockId: string
				canonical: string
				map: string[]
		}

		export type Binding = {
				"id": string,
				"canonicalBaseAddress": string
		}

		export type Route = {
				domain: string
				id: string
				pageContext: Route.PageContext
				params: Route.Params
				path: string
				pathId: string
				queryString: Route.QueryString
				rootName: string
				ssr: boolean
				blockId: string
				canonicalPath: string
				metaTags: any
				routeId: string
				title: any
				varyContentById: boolean
		}
		export type Culture = {
				availableLocales: any[]
				country: string
				currency: string
				language: string
				locale: string
				customCurrencyDecimalDigits: any
				customCurrencySymbol: string
		}

		export type Extension = {
				before: string[]
				around: string[]
				after: string[]
				blockId: string
				blocks: Extension.Block[]
				component: string
				composition: string
				hasContentSchema: boolean
				hydration: string
				implements: string[]
				props: Extension.Props
				render: string
				track: any[]
				content: Extension.Props
				contentIds: string[]
		}
}