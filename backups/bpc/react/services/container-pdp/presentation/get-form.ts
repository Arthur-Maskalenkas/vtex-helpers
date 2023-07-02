import { ColorsResolver } from "../infra/colors-resolver"
import { DistanceResolver } from "../infra/distance-resolver"
import { SizesResolver } from "../infra/sizes-resolver"


export class GetForm {
	constructor(
		private readonly colorsResolver: ColorsResolver,
		private readonly sizesResolver: SizesResolver,
		private readonly distanceResolver: DistanceResolver,
	) {
	}

	async getFirstStepData(): Promise<GetForm.getFirstStepDataResponse> {
		const distance = await this.distanceResolver.handle()
		console.log(`🚀 ~ file: transform-step-1-data.ts:17 ~ TransformStep1Data ~ getFirstStepData ~ distance:`, distance)
		const color = await this.colorsResolver.handle()
		console.log(`🚀 ~ file: transform-step-1-data.ts:18 ~ TransformStep1Data ~ getFirstStepData ~ color:`, color)
		const size = await this.sizesResolver.handle()
		console.log(`🚀 ~ file: transform-step-1-data.ts:19 ~ TransformStep1Data ~ getFirstStepData ~ size:`, size)

		return {
			distance,
			color,
			size
		}
	}

}


export namespace GetForm {
	export type Input = {
		form_value: string
		comp_isValid: boolean
		comp_label: string
		comp_title: string
		comp_isActive: boolean
	}


	export type dataTransformed = Array<Input>

	export type DataColorTransformed = Array<Input & { comp_image: string }> | undefined

	export type DataSizeTransformed = Array<Input & {}> | undefined

	export type DataDistanceTransformed = Array<Input & {}> | undefined

	export type getFirstStepDataResponse = {
		color?: DataColorTransformed,
		size?: DataSizeTransformed,
		distance?: DataDistanceTransformed
	}
}