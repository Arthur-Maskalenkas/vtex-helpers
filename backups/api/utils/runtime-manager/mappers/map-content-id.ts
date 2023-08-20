import { Mapper } from "../protocols/mapper-protocol";
import { RuntimeExtensionModel } from "../../../models/runtime-extension";
import {BlockClearedModel} from "../../../models/block-clared-manager";

export class MapContentId implements Mapper {
  public field: keyof BlockClearedModel = 'contentIds'

  public map(blockRunTime: RuntimeExtensionModel): any {
    console.log(`🚀 ~ file: map-content-id.ts:8 ~ MapContentId ~ map ~ blockRunTime:`, blockRunTime)
    if (blockRunTime?.contentIds && blockRunTime?.contentIds?.some(item => Boolean(item))) {
      return blockRunTime.contentIds
    }

    return false

  }

}
