import {
		ReducerFormSearchParams, ReducerFormSearchParamsDefaultValues
} from "../../../../../../src/views/screens/commons/form/context/reducer/reducer.ts";
import { faker } from "@faker-js/faker";



export class BuilderReducerFormSearchParams {
		#data: ReducerFormSearchParams.States = {
				...ReducerFormSearchParamsDefaultValues,
				urlGenerated: faker.internet.url()
		}


		private constructor() {
		}

		public static a() {
				return new BuilderReducerFormSearchParams()
		}

		public build() {
				return this.#data
		}

		public withError() {
				this.#data.hasErrors = true
				return this
		}

		public withInputsWithErrors() {
				this.#data.inputsWithErrors = new Map([ [ 'name', 'error' ] ])
				return this
		}

}