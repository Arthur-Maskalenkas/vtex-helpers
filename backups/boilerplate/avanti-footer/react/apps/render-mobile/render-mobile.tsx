import { UseGlobalContextAvantiFooter } from 'avantiimplantacao.global-context'

import React from 'react'
import { CSS_HANDLES, generateCSS } from '../../modules'
import { useCssHandles } from 'vtex.css-handles'
import { OtherSections } from '../../components-context/other-sections/other-sections'
import { Logo } from '../../components-context/logo/logo'
import { AboutStore } from '../../components-context/about-store/about-store'
import { SocialLinks } from '../../components-context/social-links/social-links'
import { PaymentMethods } from '../../components-context/payment-methods/payment-methods'
import { Security } from '../../components-context/security/security'
import { Copyright } from '../../components-context/copyright/copyright'


export const RenderMobile = () => {
  const css = useCssHandles(CSS_HANDLES)
  const footerContext = UseGlobalContextAvantiFooter()

  console.log('footerContext', footerContext)
  return (
    <div className={generateCSS('container-component', ['render-mobile'], css)}>
      <Logo />
      <OtherSections />
      <AboutStore />
      <Security />
      <SocialLinks />
      <PaymentMethods />
      <Copyright />
    </div>
  )
}
