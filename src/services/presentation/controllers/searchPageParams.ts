import { type ProtocolController } from '../protocols/controller.ts'
import { type IUsecaseMapSearchParams } from '../../domain/useCases/mapSearchParams.ts'

export class ControllerSearchPageParams implements ProtocolController {
  constructor (
    private readonly readonlyIUsecaseMapSearchParams: IUsecaseMapSearchParams
  ) {}

  public async handle<R = IUsecaseMapSearchParams.Result, P = string> (params: P): Promise<R> {
    try {
      return this.readonlyIUsecaseMapSearchParams.map(params as string) as R
    } catch (error) {
      console.error(error)
      return null as R
    }
  }
}