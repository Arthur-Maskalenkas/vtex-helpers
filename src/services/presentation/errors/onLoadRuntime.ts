import { ErrorBase } from './base.ts'

export class ErrorOnLoadRuntime extends ErrorBase {
  constructor () {
    super({ name: 'ErrorOnLoadRuntime', message: 'Error on load runtime' })
  }
}