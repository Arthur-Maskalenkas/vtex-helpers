import { ControllerLoadRuntime } from '../../../../src/services/presentation/controllers/loadRuntime.ts'
import { BuilderUseCaseLoadRuntime } from '../builders/loadRuntime.ts'
import { type IUseCaseLoadRunTime } from '../../../../src/services/domain/useCases/loadRuntime.ts'
import { ErrorOnLoadRuntime } from '../../../../src/services/presentation/errors/onLoadRuntime.ts'

const makeSut = (params: {
  useCaseLoadRunTime?: IUseCaseLoadRunTime
} = {}) => {
  const { useCaseLoadRunTime = BuilderUseCaseLoadRuntime.a().build() } = params

  const sut = new ControllerLoadRuntime(useCaseLoadRunTime)
  return { sut }
}

describe(ControllerLoadRuntime.name, () => {
  it('should return a runtime object', async () => {
    const { sut } = makeSut()

    const result = await sut.handle()

    expect(result).toBeTruthy()
  })

  it('should a call useCaseLoadRunTime.load', async () => {
    const useCaseLoadRunTime = BuilderUseCaseLoadRuntime.a()
      .withSpy()
      .build()

    const { sut } = makeSut({ useCaseLoadRunTime })

    await sut.handle()

    expect(useCaseLoadRunTime.load).toHaveBeenCalledTimes(1)
  })

  it('should throw ErrorOnLoadRuntime when useCaseLoadRunTime returns null', async () => {
    const useCaseLoadRunTime = BuilderUseCaseLoadRuntime.a()
      .withNullReturn()
      .build()
    const { sut } = makeSut({ useCaseLoadRunTime })

    const result = await sut.handle()

    expect(result).toBeInstanceOf(ErrorOnLoadRuntime)
  })
})