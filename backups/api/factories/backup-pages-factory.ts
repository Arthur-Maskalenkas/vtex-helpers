import { VtexRepository } from "../repository/vtex-repository";
import { BackupPages } from "../services/backup-pages";
import { HtmlManager } from "../utils/html-manager";
import { MapBlockId } from "../utils/runtime-manager/mappers/map-block-id";
import { MapContentId } from "../utils/runtime-manager/mappers/map-content-id";
import { MapPage } from "../utils/runtime-manager/mappers/map-page";
import { MapProps } from "../utils/runtime-manager/mappers/map-props";
import { RuntimeManager } from "../utils/runtime-manager/runtime-manager";
import { FilterThreePath } from "../utils/runtime-manager/filters/filter-three-path";
import { MapThreePath } from "../utils/runtime-manager/mappers/map-three-path";
import { BlocksClearedManager } from "../utils/blocks-cleared-manager/blocks-cleared-manager";
import { FilterExtensionWithoutContent } from "../utils/runtime-manager/filters/filter-extension-without-content";
import {MapPropsOnCode} from "../utils/runtime-manager/mappers/map-props-on-code";

export const BackupPagesFactory = () => {
  const mappers = [new MapBlockId(), new MapPage(), new MapContentId(), new MapProps(), new MapThreePath(), new MapPropsOnCode()]
  const filters = [new FilterExtensionWithoutContent()]

  const vtexRepository = new VtexRepository();
  const htmlManager = new HtmlManager();
  const runtimeManager = new RuntimeManager(mappers, filters);
  const blocksClearedManager = new BlocksClearedManager()

  return new BackupPages(vtexRepository, htmlManager, runtimeManager, blocksClearedManager);
}
