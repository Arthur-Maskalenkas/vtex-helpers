import { Mapper } from "./protocols/mapper-protocol";
import { RuntimeExtensionModel } from "../../models/runtime-extension";
import { RuntimeModel } from "../../models/runtime";
import { Filter } from "./protocols/filter-protocol";

export class RuntimeManager {
  constructor(
    private readonly mappers?: Mapper[],
    private readonly filters?: Filter[]
  ) {
  }

  public keyFormatter(blockRunTime: RuntimeExtensionModel, key: string) {
    const regexToPickLastPartOfKey = /(?<=\/)[^\/]+$/g
    const contentIds = blockRunTime?.contentIds
    const keyFormatted = key.match(regexToPickLastPartOfKey)?.[0];

    if (blockRunTime?.contentIds && contentIds?.some(item => Boolean(item))) {
      return `${keyFormatted}--${contentIds[0]}`
    }

    return keyFormatted
  }

  public mapProperties(value: RuntimeExtensionModel, runtime: RuntimeModel, threePath: string) {
    return this.mappers.reduce((acc, mapper) => {
      const valueMapped = mapper?.map(value, runtime, threePath)

      if (!valueMapped) {
        return acc
      }

      return {
        ...acc,
        [mapper.field]: valueMapped
      }
    }, {})
  }

  public mapRuntime(runtime: RuntimeModel, blocksCleared: Map<string, any>) {
    const extensions = Object.entries(runtime?.extensions)

    for (const [threePath, extension] of extensions) {

      let thisObjectIsValid = true;

      for (const filter of this.filters) {
        const isValid = filter.verifyIfIsValid({ threePath, extension, runtime })

        if (!isValid) {
          thisObjectIsValid = false
          break;
        }
      }

      if (!thisObjectIsValid) {
        continue;
      }

      const keyFormatted = this.keyFormatter(extension, threePath)
      const valueContent = Reflect.ownKeys(extension.content).length > 0 && extension?.content
      const valueProps = Reflect.ownKeys(extension.props).length > 0 && extension?.props
      console.log(`🚀 ~ file: runtime-manager.ts:62 ~ RuntimeManager ~ mapRuntime ~ valueContent:`, [valueProps, valueContent])

      const hasAnyProps = valueContent || valueProps || false


      if (!keyFormatted || !hasAnyProps) {
        continue;
      }

      const mappedProperties = this.mapProperties(extension, runtime, threePath)

      blocksCleared.set(keyFormatted, mappedProperties)

      console.log(`🚀🚀🚀🚀🚀🚀`)
    }

  }
}
