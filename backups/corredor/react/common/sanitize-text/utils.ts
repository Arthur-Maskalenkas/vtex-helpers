// funções criadas a partir do componente rich text, presente no repositorio da vtex
import { generateCSS as generateCSSType } from './../../modules';



export class SanitizerHelper {

  public static getConfig() {
    const sanitizerConfig = {
      allowedTags: [
        'a',
        'br',
        'div',
        'em',
        'h1',
        'strong',
        'h2',
        'h3',
        'i',
        'h4',
        'h5',
        'h6',
        'iframe',
        'img',
        'li',
        'ol',
        'p',
        'span',
        'sup',
        'table',
        'tbody',
        'td',
        'th',
        'thead',
        'tr',
        'ul',

      ],
      allowedAttributes: {
        '*': ['class', 'title'],
        a: ['href', 'target'],
        img: ['src', 'alt'],
        iframe: ['frameborder', 'height', 'src', 'width', 'style'],
      },
      allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    }

    return sanitizerConfig
  }

}

export class MarkedHelper {
  public static configNormalText(content: any, el: string, css: any, generateCSS: typeof generateCSSType, variations: string[]) {
    const defaultClass = generateCSS('variation', [...variations], css, { variations: ['sanitized', 'text'] })


    return `<${el} class="${defaultClass}">${content}</${el}>`
  }

  public static configHeading(text: string, level: number, raw: string, css: any, generateCSS: typeof generateCSSType, variations: string[]) {
    const defaultClass = generateCSS('variation', [...variations], css, { variations: ['sanitized', 'title'] })


    const slug = raw?.toLowerCase()?.replace(/[^\wàùòèéì]+/g, '-')?.replace(/^\-+|\-+$/g, '');
    return `
      <h${level} id="${slug}" class="${css[`h${level}`]} ${defaultClass}">
        ${text}
      </h${level}>
    `;
  }

  public static configStrong(content: string, css: any, generateCSS: typeof generateCSSType, variations: string[]) {
    const defaultClass = generateCSS('variation', [...variations], css, { variations: ['sanitized', 'strong'] })

    return `<strong class="${defaultClass}">${content}</strong>`
  }




  public static configLink(href: string, title: string, content: string, css: any, generateCSS: typeof generateCSSType, variations: string[]) {
    const defaultClass = generateCSS('variation', [...variations], css, { variations: ['sanitized', 'link'] })

    const getTargetFromUrl = (url: string) => {
      const urlSplit = url.split('?')

      if (urlSplit.length < 2) {
        return ''
      }

      const [, qs] = urlSplit
      const hastTargetBlank = qs.includes('target=_blank')

      return hastTargetBlank ? 'target=_blank' : ''
    }

    const targetAtr = getTargetFromUrl(href)
    const targetRemoved = targetAtr
      ? href.replace(/target=_blank/, '').replace(/\?&/, '?')
      : href

    // clean trailing ? or &
    const cleanHref = targetRemoved.replace(/(\?|&)$/, '')
    const titleAtr = title ? `title="${title}"` : ''

    let finalLink = `<a class="${defaultClass}" href="${cleanHref}"`

    if (titleAtr) {
      finalLink += ` ${titleAtr}`
    }

    if (targetAtr) {
      finalLink += ` ${targetAtr}`
    }

    finalLink += `>${content}</a>`

    return finalLink
  }


  public static configImage(href: string, title: string, content: string, css: any, generateCSS: typeof generateCSSType, variations: string[]) {
    const defaultClass = generateCSS('variation', [...variations], css, { variations: ['sanitized', 'image'] })

    return `<img class="${defaultClass}" src="${href}" alt="${content}" ${title ? `title="${title}"` : ''} />`
  }
  public static configList(body: string, ordered: boolean, css: any, generateCSS: typeof generateCSSType, variations: string[]) {
    const defaultClass = generateCSS('list', ['sanitize-text', ...variations], css, { variations: ['sanitized'] })

    const tag = ordered ? 'ol' : 'ul'

    return `<${tag} class="${defaultClass} ${ordered ? defaultClass : ''
      }">${body}</${tag}>`
  }

  public static configListItem(content: string, css: any, generateCSS: typeof generateCSSType, variations: string[]) {
    const defaultClass = generateCSS('variation', [...variations], css, { variations: ['sanitized', 'list-item'] })


    return `<li class="${defaultClass}">${content}</li>`
  }

}
