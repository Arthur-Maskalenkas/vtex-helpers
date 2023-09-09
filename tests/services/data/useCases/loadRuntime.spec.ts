import { UseCaseLoadRuntime } from '../../../../src/services/data/useCases/loadRuntime.ts'
import { BuilderProtocolLoadRunTimeRepository } from '../mocks/builders/loadRuntimeRepository.ts'
import { type ProtocolLoadRunTimeRepository } from '../../../../src/services/data/protocols/loadRuntimeRepository.ts'

const makeSut = (params: {
  protocolLoadRuntimeRepository?: ProtocolLoadRunTimeRepository
} = {}) => {
  const {
    protocolLoadRuntimeRepository = new BuilderProtocolLoadRunTimeRepository()
      .build()
  } = params

  const sut = new UseCaseLoadRuntime(protocolLoadRuntimeRepository as any)
  return { sut }
}

describe(UseCaseLoadRuntime.name, () => {
  it('should return a runtime object', async () => {
    const { sut } = makeSut()

    const result = await sut.load()

    expect(result).toBeTruthy()
  })

  it('should a call protocolLoadRuntimeRepository.searchRuntimeInHTML', async () => {
    const protocolLoadRuntimeRepository = new BuilderProtocolLoadRunTimeRepository()
      .build()

    const { sut } = makeSut({ protocolLoadRuntimeRepository })

    await sut.load()

    expect(protocolLoadRuntimeRepository.searchRuntimeInHTML).toHaveBeenCalledTimes(1)
  })

  it('should return null if protocolLoadRuntimeRepository.searchRuntimeInHTML returns null', async () => {
    const protocolLoadRuntimeRepository = new BuilderProtocolLoadRunTimeRepository()
      .returnWithoutTypeErrors(null)
      .build()

    const { sut } = makeSut({ protocolLoadRuntimeRepository })

    const result = await sut.load()

    expect(result).toBeNull()
  })
})