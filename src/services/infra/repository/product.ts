import { type ProtocolMapperSearchParams } from '../../data/protocols/mapperSearchParams.ts'

export class RepositoryProduct implements ProtocolMapperSearchParams {
  map (params: ProtocolMapperSearchParams.Params): ProtocolMapperSearchParams.Result {
    if (!params) return null
    const listParams = params.split(',') ?? [params]

    const mapperListParams = (listToTransform: string[]) => {
      return listToTransform.reduce((acc: any, param) => {
        const [attr, key, value] = param.split('=')

        if (!attr && !key && !value) return acc

        if (acc[attr]) {
          acc[attr] = {
            ...acc[attr],
            [key]: value
          }
          return acc
        }

        acc[attr] = {
          [key]: value
        }

        return acc
      }, {})
    }

    if (!listParams) return null

    return mapperListParams(listParams)
  }
}