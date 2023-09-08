import { type ModelRuntime } from '../models/runtime.ts'

export interface IUseCaseLoadRunTime {
  load: () => Promise<ModelRuntime>
}