import { PFilterLinks, PMatch } from './protocols'
import { GenerateHTMLKey } from './helpers'

import {
  DataRefined,
  schema_site_editor_default_collection_flags,
  schema_site_editor_default_linkField_filtered,
  schema_site_editor_default_option_content,
  schema_site_editor_default_screen_config_links
} from '../_interfaces'
import { TextReplacer } from '../text-replacer/text-replacer'

export class FilterLinks implements PFilterLinks {
  constructor (
    private readonly matchs: PMatch[],
    private readonly refinedData: DataRefined,
    private readonly textReplacer: TextReplacer
  ) {
  }

  filter (link: schema_site_editor_default_collection_flags): schema_site_editor_default_linkField_filtered | null {
    if (!this?.refinedData || !link || !link?._screen_config_links?.[0] || !link?.isActive || JSON.stringify(link?._screen_config_links?.[0]) === '{}') {
      return null
    }

    const {
      _screen_config_links = [],
      ...currentCollectionData
    } = link

    const linksMatcheds = Object?.keys(_screen_config_links?.[0])?.reduce((acc: any, key: keyof schema_site_editor_default_screen_config_links) => {
      const currentLink = _screen_config_links?.[0]?.[key]

      const matcher = this?.matchs?.find(matcher => matcher.attributeLinkParent === key)

      if (!matcher) {
        return null
      }

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

    if (!linksMatcheds) {
      return null
    }

    const collectionFiltered: schema_site_editor_default_option_content = (currentCollectionData?.items?.[0] as schema_site_editor_default_option_content)

    const textWithVariablesReplaced = this.textReplacer.replaceVars(collectionFiltered?.text, this.refinedData)

    const replaceCurrentTextOfLink: Omit<schema_site_editor_default_collection_flags, '_screen_config_links'> = {
      ...currentCollectionData,
      items: [
        {
          ...currentCollectionData.items?.[0],
          text: textWithVariablesReplaced
        }
      ]
    }

    return {
      ...replaceCurrentTextOfLink,
      HTMLMatch: {
        ...linksMatcheds,
        [GenerateHTMLKey(`priority-value-${link?.priority}`)]: true,
        [GenerateHTMLKey(`type-content-${link?.typeContent}`)]: true,
        [GenerateHTMLKey(`link-name-${link?.__editorItemTitle}`)]: true,
        ...(!!link?.variant && ({ [GenerateHTMLKey(`variant-value-${link?.variant}`)]: true }))
      }
    }
  }
}