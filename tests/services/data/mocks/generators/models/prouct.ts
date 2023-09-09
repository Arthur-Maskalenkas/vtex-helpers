import { faker } from '@faker-js/faker'
import { type ModelProduct } from '../../../../../../src/services/domain/models/product.ts'
import { generateExternalModelProduct } from './external/product.ts'

const anyNumber = () => String(faker.number.int())

export const generateModelProduct = (): ModelProduct => ({
  api: generateExternalModelProduct(),
  currentProduct: {
    name: faker.commerce.productName(),
    brand: faker.commerce.productName(),
    categories: [{ name: faker.commerce.productName(), url: faker.internet.url() }],
    category: { name: faker.commerce.productName(), url: faker.internet.url() },
    currentSku: {
      currentPrice: faker.number.int(),
      id: anyNumber(),
      name: faker.commerce.productName(),
      oldPrice: faker.number.int(),
      specifications: [{ name: faker.commerce.productName(), url: faker.internet.url(), value: faker.commerce.productName() }],
      url: faker.internet.url()
    },
    id: anyNumber(),
    skus: [{
      currentPrice: faker.number.int(),
      id: anyNumber(),
      name: faker.commerce.productName(),
      oldPrice: faker.number.int(),
      specifications: [{ name: faker.commerce.productName(), url: faker.internet.url(), value: faker.commerce.productName() }],
      url: faker.internet.url()
    }],

    collections: { collection1: faker.commerce.productName() },
    specifications: [{ name: faker.commerce.productName(), url: faker.internet.url(), value: faker.commerce.productName() }]
  }
})