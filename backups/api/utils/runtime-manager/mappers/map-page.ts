import { Mapper } from "../protocols/mapper-protocol";
import { RuntimeExtensionModel } from "../../../models/runtime-extension";
import { RuntimeModel } from "../../../models/runtime";
import { RuntimePageModel } from "../../../models/runtime-pages";
import { RuntimeRoute } from "../../../models/runtime-route";
import {BlockClearedModel} from "../../../models/block-clared-manager";


export class MapPage implements Mapper {
  public field: keyof BlockClearedModel = 'page'

  public map(_, runtime: RuntimeModel): RuntimeRoute | null {


    if (runtime?.page) {
      return runtime.route
    }

    return null
  }

}
