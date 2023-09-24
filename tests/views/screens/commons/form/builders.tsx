export class BuilderReactFormEvent {
		#elements: any[] = []

		private constructor() {
		}

		public static a() {
				return new BuilderReactFormEvent()
		}

		public appendInput(id?: string, value?: string, ...rest: any) {
				const attrs = {
						...rest,
						id,
						value
				}

				this.#elements.push(
						{
								...attrs,
								attributes: {
										...attrs,
										getNamedItem: (name: string) => {
												return { value: attrs[name] }
										}
								}
						}
				)
				return this
		}

		public appendInputWithAttributeDataWithValue(id?: string, value?: string, ...rest: any) {
				const attrs = {
						...rest,
						id,
						value,
						'data-with-value': true
				}

				this.#elements.push(
						{
								...attrs,
								attributes: {
										...attrs,
										getNamedItem: (name: string) => {
												return { value: attrs[name] }
										}
								}
						}
				)
				return this
		}


		public build() {
				return {
						currentTarget: {
								elements: this.#elements
						}
				}
		}
}