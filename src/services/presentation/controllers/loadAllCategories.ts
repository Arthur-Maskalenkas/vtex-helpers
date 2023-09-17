import { type ProtocolController } from '../protocols/controller.ts'
import { type IUseCaseLoadAllCategories } from '../../domain/useCases/loadAllCategories.ts'

export class ControllerLoadAllCategories implements ProtocolController {
  constructor (
    private readonly usecaseLoadAllCategories: IUseCaseLoadAllCategories
  ) {}

  public async handle<R = IUseCaseLoadAllCategories.Result> (): Promise<R> {
    try {
      const categories = await this.usecaseLoadAllCategories.loadAll() as R
      return categories
    } catch (error) {
      console.error(error)
      return [] as R
    }
  }
}