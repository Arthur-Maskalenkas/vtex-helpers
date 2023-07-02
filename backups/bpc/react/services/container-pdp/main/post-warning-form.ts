import { Orderform } from "../../../typings/apis/orderform"
import { RepositoryCoupon } from "../infra/repository-coupon"
import { RepositoryOrderform } from "../infra/repository-orderform"
import { PostWarningForm } from "../presentation/post-warning-form"


export const buildServicePostWarningForm = (orderform: Orderform) => {
	const repositoryOrderform = new RepositoryOrderform(orderform)
	const repositoryCoupon = new RepositoryCoupon()

	return new PostWarningForm(repositoryOrderform, repositoryCoupon)
}