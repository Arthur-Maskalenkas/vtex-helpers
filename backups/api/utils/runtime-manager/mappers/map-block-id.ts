import {Mapper} from "../protocols/mapper-protocol";
import {RuntimeExtensionModel} from "../../../models/runtime-extension";
import {BlockClearedModel} from "../../../models/block-clared-manager";

export class MapBlockId implements Mapper {
  public field: keyof BlockClearedModel = 'blockId'


  public map(blockRunTime: RuntimeExtensionModel): any {
    if (blockRunTime?.blockId) {
      const regexToPickLastPartOfKey = /@[0-9]+.*?:(.*?$)/

      return blockRunTime?.blockId?.match(regexToPickLastPartOfKey)?.[1]
    }

    return false
  }

}
