import {RuntimeExtensionModel} from "../../../models/runtime-extension";
import {RuntimeModel} from "../../../models/runtime";

export type FilterParams = {
  extension: RuntimeExtensionModel
  runtime: RuntimeModel
  threePath:string
}

export type Filter = {
  fieldToFilter?: string

  verifyIfIsValid(params:FilterParams):boolean
}
