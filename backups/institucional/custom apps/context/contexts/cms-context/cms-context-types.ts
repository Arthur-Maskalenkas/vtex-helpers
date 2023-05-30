import { CmsTextProps, CmsImageProps } from "../../../apps/render-content/components"

type ScreenConfigDevProps = {
	title: string,
	description: string
}

type ScreenConfigBreadcrumbProps = {
	pageTitle: string
}



export type ScreenConfigBannerProps = {
	srcDesktop: string
	srcMobile: string
	alt?: string
	titleContent?: string
	href?: string
	_target?: string
}

export type RenderContentProps = CmsTextProps | CmsImageProps


export type CmsContextProviderProps = {
	children: any,
	_screen_config_dev: [ScreenConfigDevProps]
	_screen_config_breadcrumb: [ScreenConfigBreadcrumbProps]
	_screen_config_banner: [ScreenConfigBannerProps]
	items: RenderContentProps[]
}

export interface CmsProviderProps extends Omit<CmsContextProviderProps, 'children' | '_screen_config_dev' | '_screen_config_breadcrumb' |'_screen_config_banner' > {
	_screen_config_dev: ScreenConfigDevProps | null
  _screen_config_breadcrumb: ScreenConfigBreadcrumbProps | null
	_screen_config_banner: ScreenConfigBannerProps | null
}


export type ContentType ='image-responsive' | 'text'

export type CmsRenderCommonProps<C extends ContentType, T = C extends any ? any : never> = {
	contentType: C
	__editorItemTitle: string
	_screen_content: [T]
}

