import { RepositoryCoupon } from "../infra/repository-coupon"
import { RepositoryOrderform } from "../infra/repository-orderform"


export class PostWarningForm {
	constructor(private readonly repositoryOrderform: RepositoryOrderform,
		private readonly repositoryCoupon: RepositoryCoupon) {
	}

	public async handle(couponCode:string) {
		const fetch = await this.repositoryCoupon.sendCouponToCart(couponCode, this.repositoryOrderform.getOrderformId)

    const successOnAddCouponInCart = fetch?.marketingData?.coupon

    return successOnAddCouponInCart
	}
}


export namespace PostWarningForm {

	export type Params = {
		couponCode: string

	}
}
