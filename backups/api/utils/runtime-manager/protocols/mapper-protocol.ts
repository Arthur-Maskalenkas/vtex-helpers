import {RuntimeExtensionModel} from "../../../models/runtime-extension";
import {RuntimeModel} from "../../../models/runtime";
import {BlockClearedModel} from "../../../models/block-clared-manager";


export type Mapper = {
   field: keyof BlockClearedModel;

  map(blockRunTime: RuntimeExtensionModel, runtime: RuntimeModel, threePath: string):any
}
