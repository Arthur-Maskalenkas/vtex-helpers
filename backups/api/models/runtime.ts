import {RuntimeExtensionModel} from "./runtime-extension";
import {RuntimePagesModel} from "./runtime-pages";
import {RuntimeRoute} from "./runtime-route";


export type RuntimeModel = {
  pages: RuntimePagesModel
  extensions: Record<string, RuntimeExtensionModel>
  page: string
  route: RuntimeRoute
  account: string
  accountId: string
  workspace: string
}
