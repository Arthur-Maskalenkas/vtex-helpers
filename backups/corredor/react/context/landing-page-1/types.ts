export interface SiteEditorLandingPage1Props {
  _screen_session_1: [ScreenSession1]
  _screen_session_2: [ScreenSession2]
  _screen_session_3: [ScreenSession3]
  _screen_session_4: [ScreenSession4]
  _screen_session_5: [ScreenSession5]
  _screen_session_6: [ScreenSession6]
}

export interface LandingPage1ProviderProps extends SiteEditorLandingPage1Props { }

export interface ScreenSession1 {
  title: string
  description: string
  _screen_image: ScreenImage[]
}

export interface ResponsiveImages {
  srcDesktop?: string
  srcTablet?: string
  srcMobile?: string
}

export interface ScreenImage extends ResponsiveImages {

  alt: string
  hrefTarget: string
  href: string
}

export interface ScreenSession2 {
  title: string
  description: string
}

export interface ScreenSession3 {
  title: string
  list_banner: ListBanner[]
}

export interface ListBanner {
  title: string
  description: string
  href: string
  screen_icon: ScreenIcon[]
  _screen_image: ScreenImage2[]
}

export interface ScreenIcon {
  src: string
}

export interface ScreenImage2 {
  srcDesktop: string
  srcTablet: string
  srcMobile: string
  alt: string
  hrefTarget: string
  href: string
}

export interface ScreenSession4 {
  title: string
  description: string
  list_banner: ListBanner2[]
}

export interface ListBanner2 {
  title: string
  description: string
  href: string
  _screen_image: ScreenImage3[]
}

export interface ScreenImage3 {
  srcDesktop: string
  srcTablet: string
  srcMobile: string
  alt: string
  hrefTarget: string
  href: string
}

export interface ScreenSession5 {
  title: string
  description: string
  list_banner: ListBanner3[]
}

export interface ListBanner3 {
  typeContent: 'image' | 'video'
  title: string
  description: string
  _screen_image?: ScreenImage4[]
  src?: string
}

export interface ScreenImage4 {
  srcDesktop: string
  srcTablet: string
  srcMobile: string
  alt: string
  hrefTarget: string
  href: string
}

export interface ScreenSession6 {
  description: string
  title: string
  list_banner: ListBanner4[]
}

export interface ListBanner4 {
  title: string
  description: string
  href: string
  _screen_image: ScreenImage5[]
}

export interface ScreenImage5 {
  srcDesktop: string
  srcTablet: string
  srcMobile: string
  alt: string
  hrefTarget: string
  href: string
}
