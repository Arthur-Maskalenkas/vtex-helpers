import { MatchByCategory } from '../../../src/filter-links/matchers/match-by-category'
import { FieldDataRefined, schema_site_editor_default_linkField } from '../../../src/_interfaces'

type SutTypes = {
  sut: MatchByCategory
}

const makeSut = (): SutTypes => {
  const sut = new MatchByCategory()

  return {
    sut
  }
}

describe("MatchByCategory", () => {
  describe('Matchs', () => {
    it('Should Match By Value', () => {
      const { sut } = makeSut()

      const mock_product_context: FieldDataRefined<string> = {
        name: 'any_name',
        value: 'any_value'
      }

      const mock_link: schema_site_editor_default_linkField[] = [
        {
          name: 'any_name',
          value: 'any_value'
        }
      ]

      const result = sut.match(mock_product_context,mock_link)

      expect(result).toStrictEqual({
        HTMLMatch: {
          "data-custom--match-by-category-attr--value-any_value": true
        }
      })
    })

    it('Should return null if match not occurs', () => {
      const { sut } = makeSut()

      const mock_product_context: FieldDataRefined<string> = {
        name: 'any_name',
        value: 'any_value'
      }

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
          "data-custom--match-by-category-attr--value-any_value": true
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
          "data-custom--match-by-category-attr-site-editor--name-any_title": true
        }
      })
    })

    it('Should return all possible HTML tags wehen all values are passed', () => {
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

      expect(result).toStrictEqual({
        HTMLMatch: {
          "data-custom--match-by-category-attr-site-editor--name-any_title": true,
          "data-custom--match-by-category-attr--value-any_value": true
        }
      })
    })
  })
})