import { describe, expect, it } from "vitest";
import { mapParams } from "../../../../../../../src/views/screens/searchProduct/modules/form/utils/mapParams.ts";
// {
// 		"paramProductName": "",
// 		"paramProductId": "6706",
// 		"paramSkuId": "",
// 		"productClusterIds": ""
// }


describe(`${mapParams.name} Tests Suite`, () => {
		let params = {
				paramProductName: 'valueProductName',
				paramProductId: 'valueProductId',
				paramSkuId: 'valueSkuId',
				productClusterIds: 'valueProductClusterIds'
		}

		it("Should return paramProductId mapped", () => {
				const result = mapParams(params)

				expect(result)
						.toBe('paramProductName=valueProductName,paramProductId=valueProductId,paramSkuId=valueSkuId,productClusterIds=valueProductClusterIds')
		})

		it('Should return null when params is empty', () => {
				const result = mapParams({})

				expect(result).toBeNull()
		})
})