import { type IUseCaseLoadRunTime } from '../../domain/useCases/loadRuntime.ts'
import { ErrorOnLoadRuntime } from '../errors/onLoadRuntime.ts'
import { type ProtocolController } from '../protocols/controller.ts'

export class ControllerLoadRuntime implements ProtocolController {
  constructor (
    private readonly useCaseLoadRunTime: IUseCaseLoadRunTime
  ) { }

  public async handle () {
    try {
      const runtime = await this.useCaseLoadRunTime.load()

      if (!runtime) return new ErrorOnLoadRuntime()

      return runtime
    } catch (error) {
      console.error(error)
      return null
    }
  }
}