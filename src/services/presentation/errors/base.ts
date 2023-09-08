export class ErrorBase extends Error {
  constructor ({ name, message }: Error) {
    super(message)

    this.name = name
  }
}