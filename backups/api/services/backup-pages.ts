import { VtexRepository } from "../repository/vtex-repository";
import { HtmlManager } from "../utils/html-manager";
import { RuntimeManager } from "../utils/runtime-manager/runtime-manager";
import {BlocksClearedManager} from "../utils/blocks-cleared-manager/blocks-cleared-manager";

export class BackupPages {
  constructor(
    private readonly vtexRepository: VtexRepository,
    private readonly htmlManager: HtmlManager,
    private readonly runtimeManager: RuntimeManager,
    private readonly blocksCleared: BlocksClearedManager
  ) { }

  public async handle() {
return
    const categoriesToBackup = await this.vtexRepository.fetchAllCategories()

    const searchParamsToBackup = [...categoriesToBackup]

    const htmlPages = await Promise.all(searchParamsToBackup.map(async (category) => {
      return await this.vtexRepository.fetchPage(category)
    }))


    for await (const html of htmlPages) {
      const scriptWithRuntime = this.htmlManager.selectScriptWithRuntime(html)
      const runtimeParsed = this.htmlManager.parseRunTime(scriptWithRuntime)
      this.runtimeManager.mapRuntime(runtimeParsed, this.blocksCleared)
    }

    const blockSorted = this.blocksCleared.remapStructure()

    console.log(`🚀🚀🚀🚀🚀🚀🚀 RESULTADO`, blockSorted)
  }
}
