import { FieldDataRefined, schema_site_editor_default_linkField } from '../../../src/_interfaces'
import { MatchByPromotionDiscount } from '../../../src/filter-links/matchers/match-by-promotion-discount'

type SutTypes = {
  sut: MatchByPromotionDiscount
}

const makeSut = (): SutTypes => {
  const sut = new MatchByPromotionDiscount()

  return {
    sut
  }
}

describe("MatchByPromotionDiscount", () => {
  describe('Matchs', () => {
    it('Should match by value', () => {
      const { sut } = makeSut()

      const mock_product_context: FieldDataRefined<string> = {
        value: '20% de desconto'
      }

      const mock_link: schema_site_editor_default_linkField[] = [
        {
          value: '20% de desconto'
        }
      ]

      const result = sut.match(mock_product_context,mock_link)

      expect(result).toStrictEqual({
        HTMLMatch: {
          "data-custom--match-by-promotion-discount-attr--value-20%-de-desconto": true
        }
      })
    })

    it('Should return null if match not occurrs', () => {
      const { sut } = makeSut()

      const mock_product_context: FieldDataRefined<string> = {
        value: 'any_value'
      }

      const mock_link: schema_site_editor_default_linkField[] = [
        {
          value: 'any_value_not_match'
        }
      ]

      const result = sut.match(mock_product_context,mock_link)

      expect(result).toBe(null)
    })
  })

  describe('HTML', () => {
    it('Should return default HTML tags', () => {
      const { sut } = makeSut()

      const mock_product_context: FieldDataRefined<string> = {
        name: 'any_name',
        value: 'any_value'
      }

      const mock_link: schema_site_editor_default_linkField[] = [
        {
          name: 'any_name',
          value: 'any_value',
          __editorItemTitle: 'any_title'
        }
      ]

      const result = sut.match(mock_product_context,mock_link)

      expect(result).toMatchObject({
        HTMLMatch: {
          "data-custom--match-by-promotion-discount-attr--value-any_value": true
        }
      })
    })

    it('Should return title HTML tag if __editorItemTitle is passed by link', () => {
      const { sut } = makeSut()

      const mock_product_context: FieldDataRefined<string> = {
        name: 'any_name',
        value: 'any_value'
      }

      const mock_link: schema_site_editor_default_linkField[] = [
        {
          name: 'any_name',
          value: 'any_value',
          __editorItemTitle: 'any_title'
        }
      ]

      const result = sut.match(mock_product_context,mock_link)

      expect(result).toMatchObject({
        HTMLMatch: {
          "data-custom--match-by-promotion-discount-attr-site-editor--name-any_title": true
        }
      })
    })

    it('Should return all possible HTML tags wehen all values are passed', () => {
      const { sut } = makeSut()

      const mock_product_context: FieldDataRefined<string> = {
        value: 'any_value'
      }

      const mock_link: schema_site_editor_default_linkField[] = [
        {
          value: 'any_value',
          __editorItemTitle: 'any_title'
        }
      ]

      const result = sut.match(mock_product_context,mock_link)

      expect(result).toStrictEqual({
        HTMLMatch: {
          "data-custom--match-by-promotion-discount-attr-site-editor--name-any_title": true,
          "data-custom--match-by-promotion-discount-attr--value-any_value": true
        }
      })
    })
  })
})