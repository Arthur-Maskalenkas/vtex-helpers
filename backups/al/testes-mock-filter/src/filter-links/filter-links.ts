import { PFilterLinks, PMatch } from './protocols'
import { GenerateHTMLKey } from './helpers'

import {
  DataRefined,
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_linkField_filtered,
  T_resolver_links
} from '../_interfaces'

export class FilterLinks implements PFilterLinks {
  constructor (
    private readonly matchs: PMatch[],
    private readonly refinedData: DataRefined
  ) {
  }

  filter (link: schema_site_editor_default_collection_flags): schema_site_editor_default_linkField_filtered | null {
    if (!this?.refinedData || !link || !link?._screen_config_links?.[0]) {
      return null
    }

    const {
      _screen_config_links = [],
      ...currentCollectionData
    } = link

    const linksMatcheds = Object?.keys(_screen_config_links?.[0])?.reduce((acc, key) => {
      const currentLink = _screen_config_links?.[0]?.[key] as T_resolver_links

      const matcher = this?.matchs?.find(matcher => matcher.attributeLinkParent === key)
      const refinedDataMatch = this.refinedData?.[matcher?.attributeLinkRefinedData]

      if (!matcher) {
        return null
      }

      const result = matcher?.match(refinedDataMatch, currentLink)

      if (!result) return null

      return {
        ...acc,
        ...result.HTMLMatch,
        [GenerateHTMLKey(`match-occurs-by-${matcher.attributeLinkRefinedData}-attr`)]: true
      }
    }, {})

    return {
      ...currentCollectionData,
      HTMLMatch: {
        ...linksMatcheds,
        [GenerateHTMLKey(`priority-value-${link?.priority}`)]: true,
        [GenerateHTMLKey(`type-content-${link?.typeContent}`)]: true,
        [GenerateHTMLKey(`link-name-${link?.__editorItemTitle}`)]: true,
        [GenerateHTMLKey(`variant-value-${link?.variant}`)]: true
      }
    }
  }
}