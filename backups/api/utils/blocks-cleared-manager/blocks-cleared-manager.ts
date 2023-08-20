import {BlockClearedModel} from "../../models/block-clared-manager";

export class BlocksClearedManager extends Map<string, BlockClearedModel> {
  constructor() {
    super()
  }

  public remapStructure() {
    const mapRemaped = new Map<string, Map<string, any>>()


    this.forEach((value, key) => {
      const map = new Map<string, any>()
      map.set(value["three-path"], value)

      const hasKey = mapRemaped.has(value.page.canonicalPath)

      if (hasKey) {
        const mapToAppend = mapRemaped.get(value.page.canonicalPath)
        mapToAppend.set(value["three-path"], value)
        return
      }

      mapRemaped.set(value.page.canonicalPath, map)
    })

    // sort map by key
    return new Map([...mapRemaped.entries()].sort())
  }
}
