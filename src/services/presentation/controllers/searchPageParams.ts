import { type ProtocolController } from '../protocols/controller.ts'
import { type IUsecaseMapSearchParams } from '../../domain/useCases/mapSearchParams.ts'

export class ControllerSearchPageParams implements ProtocolController {
  constructor (
    private readonly readonlyIUsecaseMapSearchParams: IUsecaseMapSearchParams
  ) {}

  public async handle<R = IUsecaseMapSearchParams.Result, P = string> (params: P): Promise<R> {
    return this.readonlyIUsecaseMapSearchParams.map(params as string) as R
  }
}