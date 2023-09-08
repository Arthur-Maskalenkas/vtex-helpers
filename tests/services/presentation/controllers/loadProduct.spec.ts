import { type IUseCaseLoadProduct } from '../../../../src/services/domain/useCases/loadProduct.ts'
import { ControllerLoadProduct } from '../../../../src/services/presentation/controllers/loadProduct.ts'
import { BuilderUseCaseLoadProduct } from '../builders/loadProduct.ts'
import { ErrorOnLoadProduct } from '../../../../src/services/presentation/errors/onLoadProduct.ts'

const makeSut = (params: {
  useCaseLoadProduct?: IUseCaseLoadProduct
} = {}) => {
  const { useCaseLoadProduct = BuilderUseCaseLoadProduct.a().build() } = params

  const sut = new ControllerLoadProduct(useCaseLoadProduct)
  return { sut }
}

describe(ControllerLoadProduct.name, () => {
  it('should return a array of products', async () => {
    const { sut } = makeSut()

    const result = await sut.handle({})

    expect(result).lengthOf(1)
  })

  it('should a call useCaseLoadProduct.load', async () => {
    const useCaseLoadProduct = BuilderUseCaseLoadProduct.a()
      .withSpy()
      .build()

    const { sut } = makeSut({ useCaseLoadProduct })

    await sut.handle({})

    expect(useCaseLoadProduct.load).toHaveBeenCalledTimes(1)
  })

  it('should throw ErrorOnLoadProduct when useCaseLoadProduct returns null', async () => {
    const useCaseLoadProduct = BuilderUseCaseLoadProduct.a()
      .withNullReturn()
      .build()

    const { sut } = makeSut({ useCaseLoadProduct })

    const result = await sut.handle({})

    expect(result).toBeInstanceOf(ErrorOnLoadProduct)
  })
})