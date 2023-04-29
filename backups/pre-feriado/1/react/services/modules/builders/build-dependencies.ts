import { ApiManagerSmartHint } from '../api-manager-smart-hint'
import { ApiManagerVtex } from '../api-manager-vtex/api-manager-vtex'
import { ApiSmartHintMapper } from '../api-smart-hint-mapper/api-smart-hint-mapper'

export const buildApiManagerSmartHint = (): ApiManagerSmartHint => {
  const apiManagerVtex=  new ApiManagerVtex()
  const apiSmartHintMapper=  new ApiSmartHintMapper()

  return new ApiManagerSmartHint(apiSmartHintMapper, apiManagerVtex)

}
