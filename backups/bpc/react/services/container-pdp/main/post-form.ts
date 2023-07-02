import { Orderform } from "../../../typings/apis/orderform"
import { AttachmentResolver } from "../infra/attachment-resolver"
import { RepositoryOrderform } from "../infra/repository-orderform"
import { PostForm } from "../presentation/post-form"


export const buildServicePosForm = (orderform: Orderform) => {
	const repositoryOrderform = new RepositoryOrderform(orderform)
	const attachmentResolver = new AttachmentResolver()

	return new PostForm(repositoryOrderform, attachmentResolver)
}