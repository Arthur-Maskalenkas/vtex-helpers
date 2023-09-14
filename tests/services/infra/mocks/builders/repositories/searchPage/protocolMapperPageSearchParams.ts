export class BuilderParamsProtocolMapperPageSearchParams {
  public builderResult: string[] = []

  public withParamCategorie (id, value) {
    this.builderResult.push(`paramCategorie=${id}=${value}`)
    return this
  }

  public static aBuilder () {
    return new BuilderParamsProtocolMapperPageSearchParams()
  }

  public build () {
    return this.builderResult.join(',')
  }
}