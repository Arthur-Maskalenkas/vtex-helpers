import { type ExternalModelProduct } from '../../../../../../../src/services/domain/models/external/product.ts'
import { faker } from '@faker-js/faker'

const anyNumber = () => String(faker.number.int())
export const generateExternalModelProduct = (): ExternalModelProduct => ({
  productId: faker.string.uuid(),
  allSpecifications: [],
  brand: faker.commerce.productName(),
  categories: [],
  categoriesIds: [],
  link: faker.internet.url(),
  productClusters: null,
  productTitle: faker.commerce.productName(),
  productReferenceCode: anyNumber(),
  skuSpecifications: [],
  items: [
    {
      variations: []
    } as any
  ]
})