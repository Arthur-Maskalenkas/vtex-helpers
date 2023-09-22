import {
		ReducerFormSearchParams, ReducerFormSearchParamsDefaultValues
} from "../../../../../../src/views/screens/commons/form/context/reducer/reducer.ts";



export class BuilderReducerFormSearchParams {
		#data: ReducerFormSearchParams.States = ReducerFormSearchParamsDefaultValues


		private constructor() {
		}

		public static a() {
				return new BuilderReducerFormSearchParams()
		}

		public build() {
				return this.#data
		}

}