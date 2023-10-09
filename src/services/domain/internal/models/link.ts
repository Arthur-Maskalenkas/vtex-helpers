import { ExternalModelRuntime } from "../../external/models/runtime.ts";



export class InternalModelLink {
		public readonly url: string | null
		public readonly name: string | null
		public readonly isCurrentlyLink: boolean = false

		constructor(args: InternalModelLink.Params) {
				const { name, url, currentRoute: { canonicalPath } } = args

				this.isCurrentlyLink = canonicalPath === url
				this.url = url ?? null
				this.name = name ?? null
		}
}

export namespace InternalModelLink {
		export type Params = {
				name: string
				url: string
				currentRoute: ExternalModelRuntime.Route
		}
}