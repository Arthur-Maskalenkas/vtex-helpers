import { Orderform } from "../../../typings/apis/orderform"
import { API } from "../helpers/apis"
import { HelperFetch } from "../helpers/fetch"


export class RepositoryCoupon {
	constructor() {
	}

	public sendCouponToCart(couponCode: string, orderformId: string):Promise<Orderform> {
		console.log(`🚀 ~ file: repository-coupon.ts:11 ~ RepositoryCoupon ~ sendCouponToCart ~ couponCode:`, couponCode)
		const api = API.postCoupon(orderformId)

		const headerConfig: RequestInit = {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({text: couponCode})
		}
		console.log(`🚀 ~ file: repository-coupon.ts:21 ~ RepositoryCoupon ~ sendCouponToCart ~ headerConfig:`, headerConfig)


		return HelperFetch.getData(api, headerConfig)
	}
}
