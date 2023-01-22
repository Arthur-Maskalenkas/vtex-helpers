import { PMatch } from '../protocols'
import {
  FieldDataRefined,
  schema_site_editor_default_linkField,
  schema_site_editor_default_linkField_matched
} from '../../_interfaces'
import { compare, GenerateHTMLKey } from '../helpers'

export class MatchByPromotionDiscount implements PMatch {
  readonly attributeLinkParent = 'linksByPromotionDiscount'
  readonly attributeLinkRefinedData = 'promotionDiscount'

  match (productContext: FieldDataRefined<string>, link: schema_site_editor_default_linkField[]):
  schema_site_editor_default_linkField_matched | null {
    let isValid = false

    let match

    link.forEach(currentLink => {
      const filter = compare(currentLink?.value) === compare(productContext?.value)

      if (filter) {
        isValid = true
        match = currentLink
      }
    })

    if (!isValid) return null

    return {
      HTMLMatch: {
        [GenerateHTMLKey(`match-by-promotion-discount-attr--value-${match?.value}`, false)]: true,
        ...(match.__editorItemTitle
          ? { [GenerateHTMLKey(`match-by-promotion-discount-attr-site-editor--name-${match?.__editorItemTitle}`, false)]: true }
          : {})
      }
    }
  }
}