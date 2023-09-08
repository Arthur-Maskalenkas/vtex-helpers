import { UseCaseLoadRuntime } from '../../../../src/services/data/useCases/loadRuntime.ts'
import { type ProtocolLoadRunTimeRepository } from '../../../../src/services/data/protocols/loadRuntimeRepository.ts'
import { BuilderProtocolLoadRunTimeRepository } from '../builders/loadRuntimeRepository.ts'

const makeSut = (params: {
  protocolLoadRuntimeRepository?: ProtocolLoadRunTimeRepository
} = {}) => {
  const {
    protocolLoadRuntimeRepository = BuilderProtocolLoadRunTimeRepository
      .a()
      .build()
  } = params

  const sut = new UseCaseLoadRuntime(protocolLoadRuntimeRepository)
  return { sut }
}

describe(UseCaseLoadRuntime.name, () => {
  it('should return a runtime object', async () => {
    const { sut } = makeSut()

    const result = await sut.load()

    expect(result).toBeTruthy()
  })

  it('should a call protocolLoadRuntimeRepository.searchRuntimeInHTML', async () => {
    const protocolLoadRuntimeRepository = BuilderProtocolLoadRunTimeRepository
      .a()
      .withSpy()
      .build()

    const { sut } = makeSut({ protocolLoadRuntimeRepository })

    await sut.load()

    expect(protocolLoadRuntimeRepository.searchRuntimeInHTML).toHaveBeenCalledTimes(1)
  })

  it('should return null if protocolLoadRuntimeRepository.searchRuntimeInHTML returns null', async () => {
    const protocolLoadRuntimeRepository = BuilderProtocolLoadRunTimeRepository
      .a()
      .withNullReturn()
      .build()

    const { sut } = makeSut({ protocolLoadRuntimeRepository })

    const result = await sut.load()

    expect(result).toBeNull()
  })
})