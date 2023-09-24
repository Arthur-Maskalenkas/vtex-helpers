import {
		ReducerFormSearchPage, ReducerFormSearchPageParamsDefaultValues
} from "../../../../../../src/views/screens/formSearchPage/context/reducer/reducer.ts";
import { faker } from "@faker-js/faker";



export class BuilderReducerFormSearchPage {
		#data: ReducerFormSearchPage.States = {
				...ReducerFormSearchPageParamsDefaultValues,
				urlGenerated: faker.internet.url()
		}


		private constructor() {
		}

		public static a() {
				return new BuilderReducerFormSearchPage()
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