import { ResponsiveImages } from "../context/landing-page-1/types";

export type TFallback = {
  size?: string,
  format?: 'png' | 'jpg' | 'gif',
  backgroundColor?: string,
  textColor?: string,
  text?: string
};

export class imageHelper {

  public static getSrcResponsiveOnContext(src: ResponsiveImages[]): ResponsiveImages {
    return {
      srcDesktop: src?.[0]?.srcDesktop,
      srcMobile: src?.[0]?.srcMobile,
      srcTablet: src?.[0]?.srcTablet,

    }
  }

  public static generateResponsiveSrc(responsiveSrc?: ResponsiveImages, currentDevice?: 'tablet' | 'phone' | 'desktop') {
    if (!Boolean(responsiveSrc) || !Boolean(currentDevice)) {
      return ''
    }

    const srcMapped = {
      tablet: responsiveSrc?.srcTablet,
      desktop: responsiveSrc?.srcDesktop,
      phone: responsiveSrc?.srcMobile
    }

    const currentSrc = srcMapped?.[currentDevice ?? 'desktop']

    if (!Boolean(currentSrc)) {
      return Object.values(srcMapped).find(value => Boolean(value))
    }

    return currentSrc
  }

  public static generateSrc(src?: string, fallback?: TFallback) {
    const { size = '300x300', backgroundColor = '001589', textColor = '0087ca' } = fallback ?? {}

    const apiFallback = `https://dummyimage.com/${size}/${backgroundColor}/${textColor}`

    const validSrc = Boolean(src) ? src : apiFallback

    return validSrc
  }

}
