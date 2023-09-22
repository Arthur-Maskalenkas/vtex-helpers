export class ModelInternalListOptions {
		public constructor(
					public title: string,
					public component?: Element | null,
					public parent?: string | null
		) {
				this.title = title
				this.component = component ?? null
				this.parent = parent ?? null
		}
}