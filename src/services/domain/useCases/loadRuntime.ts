import { type ModelRuntime } from '../models/runtime.ts'

export interface IUseCaseLoadRunTime {
  load: () => IUseCaseLoadRunTime.Result
}

export namespace IUseCaseLoadRunTime {
  export type Result = Promise<ModelRuntime>
}