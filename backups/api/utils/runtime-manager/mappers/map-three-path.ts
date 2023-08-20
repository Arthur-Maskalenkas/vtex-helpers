import {Mapper} from "../protocols/mapper-protocol";

import {BlockClearedModel} from "../../../models/block-clared-manager";


export class MapThreePath implements Mapper {
  public field: keyof BlockClearedModel = 'three-path'

  public map(_, __, threePath: string): string | null {
    if (threePath) {
      return threePath
    }

    return null
  }

}
