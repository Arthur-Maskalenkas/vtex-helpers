// https://olympikus.ds.vtexcrm.com.br/#RGF0YUVudGl0eSNGb3JtRGF0YSNyb3dJZD1CUCMjI0Zvcm1EYXRhX1N1Y2VzcyNBamF4UmVxdWVz%0adEVycm9yI2NvbnRlbnQ%3d
export namespace MDV1BP {

	export type FormFields = {
		acceptTerms: boolean
		pcd: boolean
	}

	export type Params = {
		age60: boolean
		birthday: string
		cpf: string
		email: string
		name: string
		productId: string
		shirts: string
		skuId: string
	} & FormFields


	export type Response = {
		Id: string
		Href: string
		DocumentId: string
	}
}
