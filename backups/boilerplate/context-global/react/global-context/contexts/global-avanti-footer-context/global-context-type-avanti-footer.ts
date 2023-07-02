export type GlobalContextTypeAvantiFooter = {
  // configurar logo
  _screen_config_logo: [ScreenConfigLogo] | null

  // configurar banner
  _screen_config_banner: [ScreenConfigBanner] | null

  // configurar coluna de texto
  _screen_config_attendance_text_column: [ScreenConfigAttendanceTextColumn] | null

  // configurar copyright
  _screen_config_text_copyright: [ScreenConfigTextCopyright] | null

  // configurar sessões de icones
  _screen_config_columns_icons: [ScreenConfigColumnsIcons] | null

  // configurar sessões de links
  _screen_config_columns_links: [ScreenConfigColumnsLinks] | null


} | null

type ResponsiveOptions = {
  responsive_option_desktop: boolean
  responsive_option_tablet: boolean
  responsive_option_mobile: boolean
}

export interface ScreenConfigTextCopyright {
  text: string
}

export interface ScreenConfigColumnsIcons {
  items: Array<{
    __editorItemTitle: string
    items: Item[]
    disable_option: boolean

  } & ResponsiveOptions>
}

export type Item = {
  __editorItemTitle: string
  src: string
  alt: string
  href: string
  target: boolean
  disable_option: boolean

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
  disable_option: boolean
  __editorItemTitle: string
  srcDesktop: string
  srcMobile: string
  target: boolean
}

export interface ScreenConfigAttendanceTextColumn {
  freeText: string
}

export interface ScreenConfigColumnsLinks {
  items: Item4[]
}

export type Item4 = {
  __editorItemTitle: string
  items: Item5[]
  disable_option: boolean

} & ResponsiveOptions

export type Item5 = {
  target: boolean
  __editorItemTitle: string
  href: string
  disable_option: boolean

} & ResponsiveOptions
