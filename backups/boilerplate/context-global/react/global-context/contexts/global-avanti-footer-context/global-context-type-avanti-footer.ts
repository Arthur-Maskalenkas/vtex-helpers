export type GlobalContextTypeAvantiFooter = {
  _screen_config_social_links: [ScreenConfigSocialLink] | null
  _screen_config_payment_methods: [ScreenConfigPaymentMethod] | null
  _screen_config_security: [ScreenConfigSecurity] | null
  _screen_config_logo: [ScreenConfigLogo] | null
  _screen_config_about_store: [ScreenConfigAboutStore] | null
  _screen_config_other_section: [ScreenConfigOtherSection] | null
  _screen_config_copyright: [ScreenConfigCopyright] | null
} | null

export interface ScreenConfigCopyright {
  text: string
}

export interface ScreenConfigSocialLink {
  __editorItemTitle: string
  items: Item[]
}

export interface Item {
  __editorItemTitle: string
  src: string
  alt: string
  href: string
}

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

export interface ScreenConfigAboutStore {
  freeText: string
}

export interface ScreenConfigOtherSection {
  items: Item4[]
}

export interface Item4 {
  __editorItemTitle: string
  items: Item5[]
}

export interface Item5 {
  target: boolean
  __editorItemTitle: string
  href: string
}
