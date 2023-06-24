export type GlobalContextTypeAvantiFooter = {
  // configurar logo
  _screen_config_logo: [ScreenConfigLogo] | null

  // configurar banner
  _screen_config_banner: [ScreenConfigBanner] | null

  // configurar coluna de texto
  _screen_config_text_column: [ScreenConfigAboutStore] | null

  // configurar copyright
  _screen_config_text_copyright: [ScreenConfigCopyright] | null

  // configurar sessões de icones
  _screen_config_sections_icons: [ScreenConfigSocialLink] | null

  // configurar sessões de links
  _screen_config_sections_links: [ScreenConfigSectionsLinks] | null


} | null

type ResponsiveOptions = {
  responsive_option_desktop: boolean
  responsive_option_tablet: boolean
  responsive_option_mobile: boolean
}

export interface ScreenConfigCopyright {
  text: string
}

export interface ScreenConfigSocialLink {
  items: Array<{
    __editorItemTitle: string
    items: Item[]
  } & ResponsiveOptions>
}

export type Item = {
  __editorItemTitle: string
  src: string
  alt: string
  href: string
  target: boolean
} & ResponsiveOptions

export interface ScreenConfigPaymentMethod {
  __editorItemTitle: string
  items: Item2[]
}

export interface Item2 {
  __editorItemTitle: string
  src: string
  alt: string
}

export interface ScreenConfigSecurity {
  __editorItemTitle: string
  items: Item3[]
}

export interface Item3 {
  src: string
  __editorItemTitle: string
  alt: string
}

export interface ScreenConfigLogo {
  __editorItemTitle: string
  srcDesktop: string
  srcMobile: string
  alt: string
}

export interface ScreenConfigBanner {
  alt: string
  href: string
  __editorItemTitle: string
  srcDesktop: string
  srcMobile: string
  target: boolean
}

export interface ScreenConfigAboutStore {
  freeText: string
}

export interface ScreenConfigSectionsLinks {
  items: Item4[]
}

export type Item4 = {
  __editorItemTitle: string
  items: Item5[]
} & ResponsiveOptions

export type Item5 = {
  target: boolean
  __editorItemTitle: string
  href: string
} & ResponsiveOptions
