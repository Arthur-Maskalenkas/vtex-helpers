import { AttachmentResolver } from "../infra/attachment-resolver"
import { RepositoryOrderform } from "../infra/repository-orderform"


export class PostForm {
	constructor(
		private readonly repositoryOrderform: RepositoryOrderform,
		private readonly attachmentResolver: AttachmentResolver
	) {
	}

	public async handle({
		formAttachments,
		itemId
	}: PostForm.Params) {
		const orderFormId = this.repositoryOrderform.getOrderformId
		const itemIndex = this.repositoryOrderform.getItemIndex(itemId).toString()

		for await (let [ key, value ] of Object.entries(formAttachments)) {
			const response = await this.attachmentResolver.handle({
				key,
				value,
				itemIndex,
				orderFormId
			})

			console.log(response)
		}

	}
}


export namespace PostForm {
	export type FormAttachments = {
		DatadeNascimento: string
		email: string
		NomedoCorredor: string
		CPF: string
		TamnhodaCamiseta: string
	}

	export type Params = {
		formAttachments: FormAttachments,
		itemId: string
	}
}