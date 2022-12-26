import {
  mock_schema_default_container_generic_quadrant,
  mock_default_quadrant_base_to_filter_collections,
  patchs_to_match_refined_with_quadrant_on_filter,
  mock_schema_default_root_app
} from './mocks/schema-site-editor-default'
import { mock_refined_data_on_product_context } from './mocks/refined-data'

import { RemapSchema } from "../../src/remap-schema/remap-schema"
import { schema_site_editor_default_root_app_badge_custom } from "../../src/remap-schema/_interfaces"
import { FilterDefaultSchema } from '../../src/filter-default-schema/filter-default-schema'

type SutTypes = {
  sut: RemapSchema
  FilterMock: FilterDefaultSchema
}

const makeSut = (schema: schema_site_editor_default_root_app_badge_custom | null): SutTypes => {
  const FilterMock = new FilterDefaultSchema(mock_refined_data_on_product_context)
  const sut = new RemapSchema(schema, FilterMock)

  return {
    sut,
    FilterMock
  }
}

describe('Remap Schema', () => {
  describe('Filter Integration', () => {
    it('Should call Filter with valid collection on quadrant bottom', () => {
      const mock_schema_default = mock_schema_default_root_app()

      const { sut, FilterMock } = makeSut(mock_schema_default)
      const spyFilter = jest.spyOn(FilterMock, 'filterCollection')
      sut.remap()
      expect(spyFilter).toHaveBeenCalledWith(mock_schema_default.quadrantBottom.collection[0])
    })

    it('Should call Filter with valid collection on quadrant top left', () => {
      const mock_schema_default = mock_schema_default_root_app()

      const { sut, FilterMock } = makeSut(mock_schema_default)
      const spyFilter = jest.spyOn(FilterMock, 'filterCollection')
      sut.remap()
      expect(spyFilter).toHaveBeenCalledWith(mock_schema_default.quadrantTopLeft.collection[0])
    })

    it('Should call Filter with valid collection on quadrant top right', () => {
      const mock_schema_default = mock_schema_default_root_app()
      const { sut, FilterMock } = makeSut(mock_schema_default)
      const spyFilter = jest.spyOn(FilterMock, 'filterCollection')
      sut.remap()
      expect(spyFilter).toHaveBeenCalledWith(mock_schema_default.quadrantTopRight.collection[0])
    })

    it('Should call only on valid collection inside quadrants', () => {
      const { quadrantRight: { productId, categoryId } } = patchs_to_match_refined_with_quadrant_on_filter()

      const mock_current_quadrant_top_right = mock_default_quadrant_base_to_filter_collections('Quadrante - Direita', [
        productId.pathCurrentQuadrant
      ])

      const mock_current_quadrant_top_left = mock_default_quadrant_base_to_filter_collections('Quadrante - Esquerda', [
        categoryId.pathCurrentQuadrant
      ])

      const { sut, FilterMock } = makeSut({
        quadrantTopRight: mock_current_quadrant_top_right,
        quadrantTopLeft: mock_current_quadrant_top_left,
        quadrantBottom: null
      })
      const spyFilter = jest.spyOn(FilterMock, 'filterCollection')

      sut.remap()

      expect(spyFilter).toHaveBeenCalledWith(mock_current_quadrant_top_right.collection[0])
      expect(spyFilter).toHaveBeenCalledWith(mock_current_quadrant_top_left.collection[0])
      expect(spyFilter).toHaveBeenCalledTimes(2)
      expect(spyFilter).not.toHaveBeenCalledWith(null)
    })
  })

  it('Should return all objects null if schema is null', () => {
    const { sut } = makeSut(null)
    const result = sut.remap()
    expect(result).toStrictEqual({
      quadrantBottom: null,
      quadrantTopLeft: null,
      quadrantTopRight: null
    })
  })
  it('Should call remap only once', () => {
    const { sut } = makeSut(null)
    const remapSpy = jest.spyOn(sut, 'remap')
    sut.remap()
    expect(remapSpy).toHaveBeenCalledTimes(1)
  })
})