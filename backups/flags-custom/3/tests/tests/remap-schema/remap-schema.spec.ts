import { RemapperContentContent, RemapperQuadrantBottom } from '_interfaces/_remap-schema'

import {
  mock_schema_coming_by_site_editor_1,
  mock_product_context_1,
  mock_result_1, mockE2E1, mockE2E2, mockE2E3
} from './mock'

import {
  RemapSchema
} from '../../src/remap-schema/remap-schema'
import {
  FilterLinks, MatchByBrand,
  MatchByCategory,
  MatchByCollection,
  MatchByProduct,
  MatchBySpecification, MatchByVariation
} from '../../src/filter-links'
import { RefinedDataBuilder } from '../../src/refined-data'
import { SortMatchs } from '../../src/sort-matchs/sort-matchs'
import {
  schema_site_editor_default_option_content,
  schema_site_editor_default_option_image,
  schema_site_editor_default_root_app_badge_custom,
  schema_site_editor_default_screen_config_position
} from '../../src/_interfaces'
import { product_context_root } from '../../src/_interfaces/product-context/custom_context'
import { MatchByPromotionDiscount } from '../../src/filter-links/matchers/match-by-promotion-discount'
import { TextReplacer } from '../../src/text-replacer/text-replacer'

type SutTypes = {
  sut: RemapSchema
}

const makeSut = (
  schema: schema_site_editor_default_root_app_badge_custom = mock_schema_coming_by_site_editor_1,
  productContext: product_context_root = mock_product_context_1): SutTypes => {
  const refinedData = new RefinedDataBuilder()
    .pickPriceField()
    .pickVariationField()
    .pickSpecificationField()
    .pickCollectionField()
    .pickCategory()
    .pickSellerField()
    .pickBrandField()
    .pickPriceField()
    .pickProductField()
    .pickPromotionDiscountField()
    .build()
    .get(productContext)

  const matchers = [
    new MatchByProduct(),
    new MatchByBrand(),
    new MatchByCategory(),
    new MatchBySpecification(),
    new MatchByVariation(),
    new MatchByCollection(),
    new MatchByPromotionDiscount()
  ]
  const textReplacer = new TextReplacer()

  const filter = new FilterLinks(matchers, refinedData, textReplacer)

  const sortMatchs = new SortMatchs()

  const sut = new RemapSchema(schema, filter, sortMatchs)

  return {
    sut
  }
}

describe('remap schema', () => {
  describe('E2E tests', () => {
    test('E2E test 1', () => {
      const { mock_result, mock_product_context, mock_schema_coming_by_site_editor } = mockE2E1()

      const { sut } = makeSut(mock_schema_coming_by_site_editor, mock_product_context)

      const result = sut.remap()

      expect(result).toMatchObject(mock_result)

      expect(result.quadrantTopRight.listOfFlags.length).toBe(5)
      expect(result.quadrantTopLeft.listOfFlags.length).toBe(5)
      expect(result.quadrantBottom.listOfFlags.length).toBe(5)
      expect(result.quadrantHorizontal.listOfFlags.length).toBe(5)
    })

    test('E2E test 2', () => {
      const { mock_result, mock_product_context, mock_schema_coming_by_site_editor } = mockE2E2()

      const { sut } = makeSut(mock_schema_coming_by_site_editor, mock_product_context)

      const result = sut.remap()

      expect(result.quadrantBottom.listOfFlags.length).toBe(5)
    })

    test('E2E test 3', () => {
      const { mock_result, mock_product_context, mock_schema_coming_by_site_editor } = mockE2E3()

      const { sut } = makeSut(mock_schema_coming_by_site_editor, mock_product_context)

      const result = sut.remap()

      expect(result.quadrantBottom.listOfFlags.length).toBe(5)
    })
  })

  describe('methods calls', () => {
    describe('remapQuadrantHorizontal()', () => {
      it('Should return correctly attributes', () => {
        const { sut } = makeSut()

        const result = sut.remapQuadrantHorizontal()

        const keys_result = Object.keys(result)

        expect(keys_result.length).toBe(3)
      })
    })

    describe('remapQuadrantTopLeft()', () => {
      it('Should return correctly attributes', () => {
        const { sut } = makeSut()

        const mock_param: schema_site_editor_default_screen_config_position = {
          horizontalDistance: '10px',
          verticalDistance: '10px'
        } as any

        const result = sut.remapQuadrantTopLeft(mock_param)

        const keys_result = Object.keys(result)

        expect(keys_result.length).toBe(6)
      })
    })

    describe('remapQuadrantTopRight()', () => {
      it('Should return correctly attributes', () => {
        const { sut } = makeSut()

        const mock_param: schema_site_editor_default_screen_config_position = {
          horizontalDistance: '10px',
          verticalDistance: '10px'
        } as any

        const result = sut.remapQuadrantTopRight(mock_param)

        const keys_result = Object.keys(result)

        expect(keys_result.length).toBe(6)
      })
    })

    describe('remapContentImage()', () => {
      it('Should return correctly attributes', () => {
        const { sut } = makeSut()

        const mock_param: schema_site_editor_default_option_image = {
          src: 'src',
          alt: 'alt',
          commonPropsBetweenContentAndImage: {
            height: '10px',
            width: '10px'
          }
        }

        const result = sut.remapContentImage(mock_param)

        const keys_result = Object.keys(result)

        expect(keys_result.length).toBe(4)
      })
    })

    describe('remapContentContent()', () => {
      it('Should return width if px attribute is passed', () => {
        const { sut } = makeSut()

        const mock_param: schema_site_editor_default_option_content = {
          text: 'one text',
          borderRadius: '10px',
          fontWeight: '700',
          color: '#fff',
          backgroundColor: '#fff',
          fontSize: '12px',
          commonPropsBetweenContentAndImage: {
            height: '10px',
            width: '10px'
          }
        }

        const expect_result: RemapperContentContent = {
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: "10px",
          color: "#fff",
          display: "flex",
          fontSize: "12px",
          fontWeight: "700",
          height: "10px",
          justifyContent: "center",
          lineHeight: "12px",
          text: "one text",
          textAlign: "center",
          width: "10px",
          zIndex: 10
        }

        const result = sut.remapContentContent(mock_param)

        const keys_result = Object.keys(result)

        expect(keys_result.length).toBe(15)
        expect(keys_result.some(item => item === 'width')).toBe(true)
      })
    })

    describe('remapStylesApp()', () => {
      it('Should not return any propertie if quadrant not is bottom', () => {
        const { sut } = makeSut()

        const mock_param: schema_site_editor_default_option_content = {
          text: 'one text',
          borderRadius: '10px',
          fontWeight: '700',
          color: '#fff',
          backgroundColor: '#fff',
          fontSize: '12px',
          commonPropsBetweenContentAndImage: {
            height: '10px',
            width: 'widthRestOfLine'
          }
        }

        const results = [
          sut.remapStylesApp(mock_param,'quadrantTopRight'),
          sut.remapStylesApp(mock_param,'quadrantTopLeft'),
          sut.remapStylesApp(mock_param,'quadrantHorizontal')
        ]

        expect(results[0]?.containerBadge?.flexGrow).toBeFalsy()
        expect(results[0]?.containerBadge?.flexGrow).toBeFalsy()
        expect(results[0]?.containerBadge?.flexGrow).toBeFalsy()
      })

      it('Should return flex-grow when widthRestOfLine is selected  ', () => {
        const { sut } = makeSut()

        const mock_param: schema_site_editor_default_option_content = {
          text: 'one text',
          borderRadius: '10px',
          fontWeight: '700',
          color: '#fff',
          backgroundColor: '#fff',
          fontSize: '12px',
          commonPropsBetweenContentAndImage: {
            height: '10px',
            width: 'widthRestOfLine'
          }
        }

        const result = sut.remapStylesApp(mock_param, 'quadrantBottom')

        const keys_result = Object.keys(result)

        expect(result?.containerBadge?.flexGrow as any).toEqual('1')
      })

      it('Should return flex-basis when widthAllLine is selected', () => {
        const { sut } = makeSut()

        const mock_param: schema_site_editor_default_option_content = {
          text: 'one text',
          borderRadius: '10px',
          fontWeight: '700',
          color: '#fff',
          backgroundColor: '#fff',
          fontSize: '12px',
          commonPropsBetweenContentAndImage: {
            height: '10px',
            width: 'widthAllLine'
          }
        }

        const result = sut.remapStylesApp(mock_param, 'quadrantBottom')

        const keys_result = Object.keys(result)

        expect(result?.containerBadge.flexBasis).toEqual('calc(100%)')
      })

      it('Should return flex-basis when widthHalfLine is selected', () => {
        const { sut } = makeSut()

        const mock_param: schema_site_editor_default_option_content = {
          text: 'one text',
          borderRadius: '10px',
          fontWeight: '700',
          color: '#fff',
          backgroundColor: '#fff',
          fontSize: '12px',
          commonPropsBetweenContentAndImage: {
            height: '10px',
            width: 'widthHalfLine'
          }
        }

        const result = sut.remapStylesApp(mock_param, 'quadrantBottom')

        const keys_result = Object.keys(result)

        expect(result?.containerBadge.flexBasis).toEqual('calc(50% - 5px)')
      })

      it('Should return flex-basis when widthOneThird is selected', () => {
        const { sut } = makeSut()

        const mock_param: schema_site_editor_default_option_content = {
          text: 'one text',
          borderRadius: '10px',
          fontWeight: '700',
          color: '#fff',
          backgroundColor: '#fff',
          fontSize: '12px',
          commonPropsBetweenContentAndImage: {
            height: '10px',
            width: 'widthOneThird'
          }
        }

        const result = sut.remapStylesApp(mock_param, 'quadrantBottom')

        const keys_result = Object.keys(result)

        expect(result?.containerBadge.flexBasis).toEqual('calc(33% - 3px)')
      })
    })

    describe('remapQuadrantBottom()', () => {
      it('Should return correctly attributes when position is leftToRight', () => {
        const { sut } = makeSut()

        const mock_param: schema_site_editor_default_screen_config_position = {
          horizontalDistance: '10px',
          positionFlow: 'leftToRight',
          verticalDistance: '10px'
        } as any

        const expect_result: RemapperQuadrantBottom = {
          position: "absolute",
          bottom: "10px",
          display: "flex",
          alignItems: "center",
          columnGap: "5px",
          flexWrap: "wrap",
          rowGap: "5px",
          left: "10px",
          flexDirection: "row"
        }

        const result = sut.remapQuadrantBottom(mock_param)

        expect(result).toEqual(expect_result)
      })

      it('Should return correctly attributes when position is center', () => {
        const { sut } = makeSut()

        const mock_param: schema_site_editor_default_screen_config_position = {
          horizontalDistance: '10px',
          positionFlow: 'center',
          verticalDistance: '10px'
        } as any

        const expect_result: RemapperQuadrantBottom = {
          position: "absolute",
          bottom: "10px",
          display: "flex",
          alignItems: "center",
          columnGap: "5px",
          rowGap: "5px",
          flexWrap: "wrap",
          left: "50%",
          transform: "translateX(-50%)",
          flexDirection: "row"
        }

        const result = sut.remapQuadrantBottom(mock_param)

        expect(result).toEqual(expect_result)
      })

      it('Should return correctly attributes when position is rightToLeft', () => {
        const { sut } = makeSut()

        const mock_param: schema_site_editor_default_screen_config_position = {
          horizontalDistance: '10px',
          positionFlow: 'rightToLeft',
          verticalDistance: '10px'
        } as any

        const expect_result: RemapperQuadrantBottom = {
          position: "absolute",
          bottom: "10px",
          display: "flex",
          alignItems: "center",
          columnGap: "5px",
          rowGap: "5px",
          flexWrap: "wrap",
          right: "10px",
          flexDirection: "row-reverse"
        }

        const result = sut.remapQuadrantBottom(mock_param)

        expect(result).toEqual(expect_result)
      })
    })
  })
})