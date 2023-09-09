import { UseCaseLoadProduct } from '../../../../src/services/data/useCases/loadProduct.ts'
import {
  type ProtocolMapperExternalModelProductToProductModel
} from '../../../../src/services/data/protocols/MapperExternalModelProductToProductModel.ts'
import { type ProtocolMapperSearchParams } from '../../../../src/services/data/protocols/mapperSearchParams.ts'
import { BuilderProtocolLoadProductRepository } from '../mocks/builders/protocols/loadProductRepository.ts'
import { type ProtocolLoadProducRepository } from '../../../../src/services/data/protocols/loadProductRepository.ts'
import { BuilderProtocolMapperSearchParams } from '../mocks/builders/protocols/mapperSearchParams.ts'
import {
  BuilderProtocolMapperExternalModelProductToProductModel
} from '../mocks/builders/protocols/mapperExternalModelProductToProductModel.ts'
import { faker } from '@faker-js/faker'

const generateAnyValue = (): any => faker.lorem.word(1)

const makeSut = (params: {
  protocolLoadProductRepository?: ProtocolLoadProducRepository
  protocolMapperSearchParams?: ProtocolMapperSearchParams
  protocolMapperExternalModelProductToProductModel?: ProtocolMapperExternalModelProductToProductModel
} = {}) => {
  const {
    protocolLoadProductRepository = new BuilderProtocolLoadProductRepository()
      .build(),
    protocolMapperSearchParams = new BuilderProtocolMapperSearchParams()
      .build(),
    protocolMapperExternalModelProductToProductModel = new BuilderProtocolMapperExternalModelProductToProductModel()
      .build()
  } = params

  const sut = new UseCaseLoadProduct(
    protocolLoadProductRepository, protocolMapperSearchParams, protocolMapperExternalModelProductToProductModel)
  return { sut }
}

describe(UseCaseLoadProduct.name, () => {
  it('should return a list of products', async () => {
    const { sut } = makeSut()

    const result = await sut.load({})

    expect(result).toHaveLength(1)
  })

  it('should call mapperSearchParams with correct params', async () => {
    const mockValue = generateAnyValue()
    const protocolMapperSearchParams = new BuilderProtocolMapperSearchParams()
      .build()

    const { sut } = makeSut({ protocolMapperSearchParams })

    await sut.load(mockValue)

    expect(protocolMapperSearchParams.map).toHaveBeenCalledWith(mockValue)
  })

  it('should call loadProductRepository with correct params', async () => {
    const mockValue = generateAnyValue()

    const protocolMapperSearchParams = new BuilderProtocolMapperSearchParams().returnWith(generateAnyValue()).build()

    const protocolLoadProductRepository = new BuilderProtocolLoadProductRepository().build()

    const { sut } = makeSut({ protocolMapperSearchParams, protocolLoadProductRepository })

    await sut.load(null as any)

    expect(protocolLoadProductRepository.search).toHaveBeenCalledWith(mockValue)
  })

  it('should call mapperExternalModelProductToProductModel with correct params', async () => {
    const mockValue = generateAnyValue()

    const protocolLoadProductRepository = new BuilderProtocolLoadProductRepository()
      .returnWith(mockValue).build()

    const protocolMapperExternalModelProductToProductModel = new BuilderProtocolMapperExternalModelProductToProductModel()
      .build()

    const { sut } = makeSut({ protocolLoadProductRepository, protocolMapperExternalModelProductToProductModel })

    await sut.load(null as any)

    expect(protocolMapperExternalModelProductToProductModel.map).toHaveBeenCalledWith(mockValue)
  })

  it('should call all dependencies with correct params and return correctly value', async () => {
    const [mockvalue1, mockvalue2, mockvalue3, mockvalue4] = [generateAnyValue(), generateAnyValue(), generateAnyValue(), generateAnyValue()]

    const protocolMapperSearchParams = new BuilderProtocolMapperSearchParams()
      .returnWith(mockvalue2)
      .build()

    const protocolLoadProductRepository = new BuilderProtocolLoadProductRepository()
      .returnWith(mockvalue3)
      .build()

    const protocolMapperExternalModelProductToProductModel = new BuilderProtocolMapperExternalModelProductToProductModel()
      .returnWith(mockvalue4)
      .build()

    const { sut } = makeSut({
      protocolMapperSearchParams,
      protocolLoadProductRepository,
      protocolMapperExternalModelProductToProductModel
    })

    const result = await sut.load(mockvalue1)

    expect(protocolMapperSearchParams.map).toHaveBeenCalledWith(mockvalue1)
    expect(protocolMapperSearchParams.map).toHaveBeenCalledTimes(1)

    expect(protocolLoadProductRepository.search).toHaveBeenCalledWith(mockvalue2)
    expect(protocolLoadProductRepository.search).toHaveBeenCalledTimes(1)

    expect(protocolMapperExternalModelProductToProductModel.map).toHaveBeenCalledWith(mockvalue3)
    expect(protocolMapperExternalModelProductToProductModel.map).toHaveBeenCalledTimes(1)

    expect(result).toBe(mockvalue4)
  })
})