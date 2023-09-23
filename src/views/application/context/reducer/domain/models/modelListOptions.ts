export class ModelListOptions {
		public constructor(
					public title: string,
					public key: string,
					public component?: Element | null,
					public parent?: string | null
		) {
				this.key = key
				this.title = title
				this.component = component ?? null
				this.parent = parent ?? null
		}
}