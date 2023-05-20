// componente com a mesma funcionlidade do rich-text presente na vtex.

import React, { useMemo } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { CSS_HANDLES, generateCSS } from '../../modules'
import insane from '@vtex/insane'
import marked, { Renderer } from 'marked'
import escapeHtml from 'escape-html'
import { MarkedHelper, SanitizerHelper } from './utils'

export type VariationProps = {
  variationType?: 'text' | 'title' | 'link'
  variationFont?: '1' | '2' | '3'
  variationColor?: 'black' | 'white' | 'blue' | 'gray'
}


export type SanitizeTextProps = {
  text: string
  customClass?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'li'

  variations?: VariationProps
}

export const SanitizeText = ({ text, customClass, as = 'h3', variations }: SanitizeTextProps) => {
  if (!text) {
    return <></>
  }
  const css = useCssHandles(CSS_HANDLES)

  const variationsRemapped = Object.entries(variations ?? {})?.map(([key, value]) => {
    const keyFormatted = key?.replace(/[A-Z]/g, '-$&')?.toLowerCase()?.replace(/variation-/g, '')
    const valueFormatted = value?.toLowerCase()
    const fullValue = `${keyFormatted}-${valueFormatted}`
    const cssHandlesValue = generateCSS('variation', [fullValue], css)?.replace(/undefined/g, '')
    return cssHandlesValue
  }).join(' ')

  const currentVariation = Boolean(variationsRemapped) ? variationsRemapped : [generateCSS('variation', ['default-value'], css)]

  const onlyVariations = Object.entries(variations ?? {})?.map(([key, value]) => {
    const keyFormatted = key?.replace(/[A-Z]/g, '-$&')?.toLowerCase()?.replace(/variation-/g, '')
    const valueFormatted = value?.toLowerCase()
    const fullValue = `${keyFormatted}-${valueFormatted}`

    return fullValue
  })


  const [isMounted, setMounted] = React.useState(false)

  const Element = as



  const renderer = React.useRef<Renderer>()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!isMounted) {
    renderer.current = new Renderer()
    renderer.current.strong = (content: string) => MarkedHelper.configStrong(content, css, generateCSS, onlyVariations)
    renderer.current.paragraph = (content: string) => MarkedHelper.configNormalText(content, 'p', css, generateCSS, onlyVariations)
    renderer.current.strong = (content: string) => MarkedHelper.configStrong(content, css, generateCSS, onlyVariations)
    renderer.current.em = (content: string) => MarkedHelper.configNormalText(content, 'em', css, generateCSS, onlyVariations)
    renderer.current.heading = (text, level, raw) => MarkedHelper.configHeading(text, level, raw, css, generateCSS, onlyVariations)
    renderer.current.link = (href: string, title: string, content: string) => MarkedHelper.configLink(href, title, content, css, generateCSS, onlyVariations)
    renderer.current.image = (href: string, title: string, content: string) => MarkedHelper.configImage(href, title, content, css, generateCSS, onlyVariations)
    renderer.current.list = (body: string, ordered: boolean) => MarkedHelper.configList(body, ordered, css, generateCSS, onlyVariations)
    renderer.current.listitem = (content: string) => MarkedHelper.configListItem(content, css, generateCSS, onlyVariations)
    renderer.current.html = (html) => escapeHtml(html)
  }

  const HTMLSanitized = useMemo(() => {
    marked.setOptions({
      gfm: true,
      breaks: true,
      sanitize: false, // Use insane lib for sanitizing
      smartLists: true,
      renderer: renderer.current,
    })

    return insane(
      marked(text),
      SanitizerHelper.getConfig()
    )
  }, [text])

  return (
    <Element className={`${generateCSS('container-component', ['sanitize-text', customClass ?? ''], css, { variations: [variations?.variationType ?? 'text'] })} ${currentVariation} `} dangerouslySetInnerHTML={{ __html: HTMLSanitized }} />
  )
}
