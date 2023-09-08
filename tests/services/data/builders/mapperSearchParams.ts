import { type ProtocolMapperSearchParams } from '../../../../src/services/data/protocols/mapperSearchParams.ts'

export class BuilderProtocolMapperSearchParams {
  #protocolMapperSearchParams: ProtocolMapperSearchParams
  public fnSpySearch: any = null

  private constructor () {
    this.#protocolMapperSearchParams = {
      map: () => 'anyParam'
    } as any
  }

  public static a (): BuilderProtocolMapperSearchParams {
    return new BuilderProtocolMapperSearchParams()
  }

  public build (): ProtocolMapperSearchParams {
    return this.#protocolMapperSearchParams
  }

  public withNullReturn () {
    vi.spyOn(this.#protocolMapperSearchParams, 'map').mockImplementationOnce(() => null as any)

    return this
  }

  public withSpy () {
    this.fnSpySearch = vi.spyOn(this.#protocolMapperSearchParams, 'map')

    return this
  }

  public returnWith (value: any) {
    vi.spyOn(this.#protocolMapperSearchParams, 'map').mockImplementationOnce(() => value)

    return this
  }
}