import {
  type ProtocolMapperExternalModelProductToProductModel
} from '../../../../src/services/data/protocols/MapperExternalModelProductToProductModel.ts'

export class BuilderProtocolMapperExternalModelProductToProductModel {
  #protocolMapperExternalModelProductToProductModel: ProtocolMapperExternalModelProductToProductModel
  public fnSpySearch: any = null

  private constructor () {
    this.#protocolMapperExternalModelProductToProductModel = {
      map: () => [{ anyobject: 'anyobject' }]
    } as any
  }

  public static a (): BuilderProtocolMapperExternalModelProductToProductModel {
    return new BuilderProtocolMapperExternalModelProductToProductModel()
  }

  public build (): ProtocolMapperExternalModelProductToProductModel {
    return this.#protocolMapperExternalModelProductToProductModel
  }

  public withNullReturn () {
    vi.spyOn(this.#protocolMapperExternalModelProductToProductModel, 'map').mockImplementationOnce(() => null as any)

    return this
  }

  public withSpy () {
    this.fnSpySearch = vi.spyOn(this.#protocolMapperExternalModelProductToProductModel, 'map')

    return this
  }

  public returnWith (value: any) {
    vi.spyOn(this.#protocolMapperExternalModelProductToProductModel, 'map').mockImplementationOnce(() => value)

    return this
  }
}