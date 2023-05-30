import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { ImageResponsive, Link } from "../../../common"
import { CmsRenderCommonProps } from "../../../context"
import { generateCSS, CSS_HANDLES } from "../../../modules"


export type ImageProps = {
  srcDesktop: string
  srcMobile: string
  alt?: string
  titleContent?: string
  href?: string
  _target?: string
}

export type CmsImageInternalAttributes = {
  _screen_config_image: [ImageProps]
}

export type CmsImageProps = {
  isMobile: boolean,
} & CmsRenderCommonProps<'image-responsive', CmsImageInternalAttributes>


export const Cmsimage = ({
  _screen_content,
  isMobile
}: CmsImageProps) => {
  const css = useCssHandles(CSS_HANDLES)
  const cmsContent = _screen_content?.[0]?._screen_config_image?.[0]
  const thisImageHaveHref = Boolean(cmsContent?.href)

  const ImageDefaultProps = {
    isMobile: isMobile,
    mobile: { src: cmsContent?.srcMobile, height: '250', width: '400' },
    desktop: { src: cmsContent?.srcDesktop, height: '630', width: '1000' },
    alt: cmsContent?.alt,
    title: cmsContent?.titleContent
  };

  if (thisImageHaveHref) {
    return (
      <div className={generateCSS('container-component', [
        'cms-render-image',
        'with-link',
        'render'
      ], css)}>
        <Link href={cmsContent?.href} target={cmsContent?._target} title={cmsContent?.titleContent}>
          <ImageResponsive {...ImageDefaultProps} />
        </Link>
      </div>
    )
  }

  return (
    <div className={generateCSS('container-component', [
      'cms-render-image',
      'without-link',
      'render'
    ], css)}>
      <ImageResponsive {...ImageDefaultProps} />
    </div>
  )
}
