import {Mapper} from "../protocols/mapper-protocol";
import {RuntimeExtensionModel} from "../../../models/runtime-extension";
import {BlockClearedModel} from "../../../models/block-clared-manager";

export class MapPropsOnCode implements Mapper {
  public field: keyof BlockClearedModel = 'props-on-code'

  public map(blockRunTime: RuntimeExtensionModel): any {
   return blockRunTime?.props
  }

}
