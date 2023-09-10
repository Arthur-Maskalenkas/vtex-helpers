import { type ExternalModelProduct } from '../../../../../../../src/services/domain/models/external/product.ts'
import { faker } from '@faker-js/faker'

const anyNumber = () => String(faker.number.int())
export const generateExternalModelProduct = (): ExternalModelProduct => ({
  productId: faker.string.uuid(),
  allSpecifications: [],
  brand: faker.commerce.productName(),
  brandId: faker.number.int(),
  allSpecificationsGroups: faker.helpers.multiple(faker.commerce.department, { count: 5 }),
  brandImageUrl: faker.string.uuid(),
  categories: [],
  productName: faker.commerce.productName(),
  categoriesIds: [],
  categoryId: anyNumber(),
  clusterHighlights: null,
  description: faker.commerce.productDescription(),
  link: faker.internet.url(),
  linkText: faker.commerce.productName(),
  metaTagDescription: faker.commerce.productDescription(),
  productClusters: null,

  productReference: faker.commerce.productName(),
  productTitle: faker.commerce.productName(),
  productReferenceCode: anyNumber(),
  releaseDate: faker.date.future() as any,
  skuSpecifications: [],
  items: faker.helpers.multiple(() => ({
    itemId: anyNumber(),
    ean: anyNumber(),
    complementName: faker.commerce.productDescription(),
    images: [],
    isKit: faker.datatype.boolean(),
    estimatedDateArrival: faker.date.future(),
    measurementUnit: faker.commerce.productDescription(),
    modalType: faker.commerce.productDescription(),
    name: faker.commerce.productName(),
    nameComplete: faker.commerce.productName(),
    referenceId: [{ Key: faker.commerce.productName(), Value: faker.commerce.productName() }],
    sellers: [
      {
        addToCartLink: faker.internet.url(),
        sellerId: anyNumber(),
        sellerDefault: faker.datatype.boolean(),
        sellerName: faker.commerce.productName(),
        commertialOffer: {
          BuyTogether: [],
          CacheVersionUsedToCallCheckout: faker.commerce.productName(),
          DiscountHighLight: [faker.commerce.productName()],
          GetInfoErrorMessage: faker.commerce.productName(),
          GiftSkuIds: [],
          IsAvailable: faker.datatype.boolean(),
          ItemMetadataAttachment: [faker.commerce.productName()],
          ListPrice: faker.number.int(),
          Price: faker.number.int(),
          PriceValidUntil: 'dsa' as any,
          PriceWithoutDiscount: faker.number.int(),
          Tax: faker.number.int(),
          PromotionTeasers: [],
          Teasers: [],
          RewardValue: faker.number.int(),
          AvailableQuantity: faker.number.int(),
          Installments: [
            {
              InterestRate: faker.number.int(),
              Name: faker.commerce.productName(),
              NumberOfInstallments: faker.number.int(),
              PaymentSystemGroupName: faker.commerce.productName(),
              PaymentSystemName: faker.commerce.productName(),
              TotalValuePlusInterestRate: faker.number.int(),
              Value: faker.number.int()
            }
          ]
        }
      }
    ],
    Videos: [],
    unitMultiplier: faker.number.int(),
    variations: [faker.commerce.productName()]
  }), { count: 2 })
})