export class BuilderParamsProtocolMapperPageSearchParams {
  public builderResult: string[] = []

  public withParamCategorie (id, value) {
    this.builderResult.push(`paramCategorie=${id}=${value}`)
    return this
  }

  public withParamCollection (id, value) {
    this.builderResult.push(`paramCollection=${id}=${value}`)
    return this
  }

  public withParamBrand (id, value) {
    this.builderResult.push(`paramBrand=${id}=${value}`)
    return this
  }

  public withParamSpecification (id, value) {
    this.builderResult.push(`paramSpecification=${id}=${value}`)

    return this
  }

  public static aBuilder () {
    return new BuilderParamsProtocolMapperPageSearchParams()
  }

  public build () {
    return this.builderResult.join(',')
  }
}