import { VtexUseCaseGetUser } from '../domain/useCases'
import { useFetch } from '../utilities'

export class VtexRepositoryAccount implements VtexUseCaseGetUser {
  async handle (): VtexUseCaseGetUser.Response {
    const response = await useFetch('/no-cache/profileSystem/getProfile')
    console.log('🚀 ~ VtexRepositoryAccount ~ handle ~ response:', response)

    return response?.UserId
  }
}