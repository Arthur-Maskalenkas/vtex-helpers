import { CMSAttributesHelper, CMSHelper } from "../../../modules"
import { SchemaArraySiteEditor, SchemaObjectSiteEditor } from "../../../typings/schema"


const isDevWS = CMSHelper?.thisIsDevWorkspace()

export function buildAppSchema() {
	return {
		title: 'Configurar conteúdo',
		type: "object",
		properties: {
			...(isDevWS && ({_screen_config_dev: buildSchemaConfigDev()})),
			_screen_config_banner: buildSchemaConfigBanner(),
			_screen_config_breadcrumb: buildSchemaConfigBreadcrumb(),
			items: buildSchemaConfigListContents(),
		}
	} as SchemaObjectSiteEditor
}

const buildSchemaConfigDev = (): SchemaArraySiteEditor => {
	return {
		type: 'array',
		title: 'Configurações para desenvolvedores',
		maxItems: 1,
		items: {
			type: 'object',
			properties: {
				title: {
					type: 'string',
					title: 'Titulo da pagina',
					description: 'Titulo que será incluido no <head>.'

				},
				description: {
					type: 'string',
					title: 'Descrição da pagina.',
					description: 'Descrição que será incluida no <head>.'
				},
			}
		}
	}
}

const buildSchemaConfigBanner = (): SchemaArraySiteEditor => {
	return CMSAttributesHelper.generateBanner()
}

const buildSchemaConfigBreadcrumb = (): SchemaArraySiteEditor => {
	return {
		type: 'array',
		title: 'Configurar Breadcrumb',
		maxItems: 1,
		items: {
			type: 'object',
			properties: {
				title: CMSAttributesHelper.generateDefaultAttributes('title', 'Titulo renderizado', 'Titulo que será exibido logo após o "inicio", presente no breadcrumb. Caso não seja preenchido, o titulo por padrão será o próprio titulo da pagina.')
			}
		}
	}
}

const buildSchemaConfigListContents = (): SchemaArraySiteEditor => {
	return {
		title: 'Configurar Conteúdo',
		type: 'array',
		items: {
			type: 'object',
			dependencies: {
				contentType: {
					oneOf: [
						{
							properties: {
								contentType: {
									enum: [
										"text"
									]
								},
								__editorItemTitle: CMSAttributesHelper.generateEditorItemTitle(),
								_screen_content: {
									type: 'array',
									maxItems: 1,
									title: 'Configurar Conteúdo',
									items: {
										type: 'object',
										properties: {
											text: CMSAttributesHelper.generateDefaultAttributes('text')
										}
									}
								}
							}
						},

						{
							properties: {
								contentType: {
									enum: [
										"image-responsive"
									]
								},
								__editorItemTitle: CMSAttributesHelper.generateEditorItemTitle(),
								_screen_content: {
									type: 'array',
									maxItems: 1,
									title: 'Configurar Conteúdo',
									items: {
										type: 'object',
										properties: {
											_screen_config_image: CMSAttributesHelper?.generateResponsiveImage()
										}
									}
								}
							}
						}
					]
				}
			},
			properties: {
				contentType: {
					title: 'Tipo de conteúdo',
					type: 'string',
					enum: [
						"text",
						"image-responsive"
					],
					enumNames: [
						"Texto",
						"Imagem"
					]
				}
			}
		}
	}
}