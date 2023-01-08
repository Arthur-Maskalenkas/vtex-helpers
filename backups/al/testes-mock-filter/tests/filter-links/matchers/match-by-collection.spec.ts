import { FieldDataRefined, schema_site_editor_default_linkField } from '../../../src/_interfaces'
import { MatchByCollection } from '../../../src/filter-links/matchers/match-by-collection'

type SutTypes = {
  sut: MatchByCollection
}

const makeSut = (): SutTypes => {
  const sut = new MatchByCollection()

  return {
    sut
  }
}

describe("MatchByCollection", () => {
  describe('Matchs', () => {
    it('Should match by value', () => {
      const { sut } = makeSut()

      const mock_product_context: Array<FieldDataRefined<string>> =
        [
          {
            name: 'any_name',
            value: 'any_value'
          }
        ]

      const mock_link: schema_site_editor_default_linkField[] =
        [
          {
            name: 'any_name',
            value: 'any_value'
          }
        ]

      const result = sut.match(mock_product_context,mock_link)

      expect(result).toStrictEqual({
        HTMLMatch: {
          "data-custom--match-by-collection-attr--value-any_value": true
        }
      })
    })

    it('Should return all links matched', () => {
      const { sut } = makeSut()

      const mock_product_context: Array<FieldDataRefined<string>> =
        [
          {
            name: 'any_name_1',
            value: 'any_value_1'
          },

          {
            name: 'any_name_2',
            value: null
          },

          {
            name: 'any_name_3',
            value: 'any_value_1'
          }
        ]

      const mock_link: schema_site_editor_default_linkField[] =
        [
          {
            name: 'any_name_1',
            value: 'any_value_1'
          },

          {
            name: 'any_name_1',
            value: 'any_value_2'
          },

          {
            name: 'any_name_3',
            value: 'any_value_1'
          },

          {
            name: 'any_name_3',
            value: 'any_value_3'
          }
        ]

      const result = sut.match(mock_product_context,mock_link)

      expect(result).toStrictEqual({
        HTMLMatch: {
          "data-custom--match-by-collection-attr--value-any_value_1": true
        }
      })
    })

    it('Should return null if match not occurs', () => {
      const { sut } = makeSut()

      const mock_product_context: Array<FieldDataRefined<string>> =
        [
          {
            name: 'any_name',
            value: 'any_value'
          }
        ]

      const mock_link: schema_site_editor_default_linkField[] = [
        {
          name: null,
          value: null
        }
      ]

      const result = sut.match(mock_product_context,mock_link)

      expect(result).toStrictEqual(null)
    })
  })

  describe('HTML', () => {
    it('Should return default HTML tags', () => {
      const { sut } = makeSut()

      const mock_product_context: Array<FieldDataRefined<string>> =
        [
          {
            name: 'any_name',
            value: 'any_value'
          }
        ]

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
          "data-custom--match-by-collection-attr--value-any_value": true

        }
      })
    })

    it('Should return title HTML tag if __editorItemTitle is passed by link', () => {
      const { sut } = makeSut()

      const mock_product_context: Array<FieldDataRefined<string>> =
        [
          {
            name: 'any_name',
            value: 'any_value'
          }
        ]

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
          "data-custom--match-by-collection-attr-site-editor--name-any_title": true
        }
      })
    })

    it('Should return all possible HTML tags wehen all values are passed', () => {
      const { sut } = makeSut()

      const mock_product_context: Array<FieldDataRefined<string>> =
        [
          {
            name: 'any_name',
            value: 'any_value'
          }
        ]

      const mock_link: schema_site_editor_default_linkField[] = [
        {
          name: 'any_name',
          value: 'any_value',
          __editorItemTitle: 'any_title'
        }
      ]

      const result = sut.match(mock_product_context,mock_link)

      expect(result).toStrictEqual({
        HTMLMatch: {
          "data-custom--match-by-collection-attr-site-editor--name-any_title": true,
          "data-custom--match-by-collection-attr--value-any_value": true

        }
      })
    })
  })
})