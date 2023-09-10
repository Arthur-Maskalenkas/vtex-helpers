export class BuilderParamsProtocolMapperSearchParams {
  public builderResult: string[] = []

  public appendParam (inIndex?: number) {
    const index = this.builderResult.length

    const attr = `attr-${inIndex ?? index}`
    const key = `key-${this.builderResult.length}`
    const value = `value-${this.builderResult.length}`

    const valueToAppend = `${attr}=${key}=${value}`

    this.builderResult.push(valueToAppend)

    return this
  }

  public appendInvalidParam () {
    this.builderResult.push(undefined as any)

    return this
  }

  public build () {
    return this.builderResult.join(',')
  }
}