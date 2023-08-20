import {Mapper} from "../protocols/mapper-protocol";
import {RuntimeExtensionModel} from "../../../models/runtime-extension";
import {BlockClearedModel} from "../../../models/block-clared-manager";

export class MapProps implements Mapper {
  public field: keyof BlockClearedModel = 'props'

  public map(blockRunTime: RuntimeExtensionModel): any {
    const valueContent = Reflect.ownKeys(blockRunTime.content).length > 0 && blockRunTime?.content
    const valueProps = Reflect.ownKeys(blockRunTime.props).length > 0 && blockRunTime?.props

    return valueContent || valueProps || false
  }

}
