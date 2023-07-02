import { Orderform } from "../../../typings/apis/orderform"


export class RepositoryOrderform {
	constructor(private readonly orderform: Orderform) {
	}

	public get getOrderformId(): string {
		return this.orderform.orderFormId
	}

	public getItemIndex(itemId: string): number {
		const itemIndex = this.orderform.items?.map(item => item?.id)

		return itemIndex.lastIndexOf(itemId)
	}
}