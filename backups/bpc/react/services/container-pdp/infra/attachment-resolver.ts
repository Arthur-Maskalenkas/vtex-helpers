import { API } from "../helpers/apis"
import { HelperFetch } from "../helpers/fetch"


export class AttachmentResolver {
	constructor() {
	}

	public async handle({
		key,
		value,
		itemIndex,
		orderFormId
	}: {
		key: string, value: string, itemIndex: string,
		orderFormId: string
	}) {
		const api = API.postAttachments(orderFormId, itemIndex, key)

		const headerConfig: RequestInit = {
			method: 'POST',
			mode: 'cors',
			credentials: 'include',
			headers: {},
			body: JSON.stringify({
				content: {
					[key]: [ value ],
				},
				expectedOrderFormSections: [
					'items',
					'totalizers',
					'clientProfileData',
					'shippingData',
					'paymentData',
					'sellers',
					'messages',
					'marketingData',
					'clientPreferencesData',
					'storePreferencesData',
					'giftRegistryData',
					'ratesAndBenefitsData',
					'openTextField',
					'commercialConditionData',
					'customData',
				],
				noSplitItem: true,
			}),
		}


		return HelperFetch.getData(api, headerConfig)
	}
}