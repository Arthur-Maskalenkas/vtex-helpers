import * as Yup from 'yup'
import { PostForm } from "../../services/container-pdp/presentation/post-form"
import { MDV1BP } from "../../typings/apis/md-v1-bp"


export type SchemaFormStep1 = {
	distance: string
	color: string
	size: string
}

export type SchemaFormStep2 = {} & PostForm.FormAttachments & MDV1BP.FormFields

export type SchemaFormStep = {} & SchemaFormStep1 & SchemaFormStep2

export type SchemaFormStep1KeysProps = keyof SchemaFormStep

export type SchemaFormStep1ShapeProps = Record<keyof SchemaFormStep, any>
export const schemaFormStep = Yup.object().shape({
	distance: Yup.string().required(),
	color: Yup.string().required(),
	size: Yup.string().required(),
	CPF: Yup.string().required(),
	DatadeNascimento: Yup.string().required(),
	NomedoCorredor: Yup.string().required(),
	TamnhodaCamiseta: Yup.string().required(),
	email: Yup.string().required()
} as SchemaFormStep1ShapeProps)

export const defaultValues  = {
  "NomedoCorredor": "arthur",
  "email": "arthur.lins@penseavanti.com.br",
  "CPF": "50988601800",
  "DatadeNascimento": "15052000",
  "pcd": false,
  "TamnhodaCamiseta": "g",
  "acceptTerms": true
  // "color": "9414",
  // "size": "54440",
  // "distance": "21KM"
}
