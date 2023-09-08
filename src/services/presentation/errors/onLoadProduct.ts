import { ErrorBase } from './base.ts'

export class ErrorOnLoadProduct extends ErrorBase {
  constructor () {
    super({ name: 'ErrorOnLoadRuntime', message: 'Error on load product' })
  }
}