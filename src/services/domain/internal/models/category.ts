export class InternalModelCategory {
  public readonly id: number
  public readonly name: string
  public readonly url: string
  public readonly children: InternalModelCategory[]
  constructor (attrs: InternalModelCategory) {
    const { id, name, url, children } = attrs

    this.id = id
    this.name = name
    this.url = url
    this.children = children
  }
}