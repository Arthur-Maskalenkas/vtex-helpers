import { type IUseCaseLoadProduct } from '../../../../src/services/domain/useCases/loadProduct.ts'

export class BuilderUseCaseLoadProduct {
  #useCaseLoadProduct: IUseCaseLoadProduct
  public fnSpyLoad: any

  private constructor () {
    this.#useCaseLoadProduct = {
      load: async () => await Promise.resolve([{} as any])
    }
  }

  static a () {
    return new BuilderUseCaseLoadProduct()
  }

  public withNullReturn () {
    vi.spyOn(this.#useCaseLoadProduct, 'load').mockImplementationOnce(() => null as any)

    return this
  }

  public withSpy () {
    this.fnSpyLoad = vi.spyOn(this.#useCaseLoadProduct, 'load')

    return this
  }

  public build () {
    return this.#useCaseLoadProduct
  }
}