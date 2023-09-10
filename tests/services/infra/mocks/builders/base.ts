import { type SpyInstance } from 'vitest'

type AllMethodsFromClass<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never
}[keyof T]
export class BuilderBase<T, R> {
  public builderResult: T
  public fnSpy: SpyInstance<[params: any], R>

  constructor (
    builderResult: T,
    spyMethod: AllMethodsFromClass<T>
  ) {
    this.builderResult = builderResult
    this.fnSpy = vi.spyOn(this.builderResult, spyMethod as any) as any
  }

  public build (): T {
    return this.builderResult
  }

  public returnWith (value: Awaited<R>, withPromise = false) {
    withPromise ? this.fnSpy.mockResolvedValue(value) : this.fnSpy.mockReturnValue(value)

    return this
  }

  public returnWithoutTypeErrors (value: any) {
    this.fnSpy.mockReturnValue(value)

    return this
  }
}