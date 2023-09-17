import { type ProtocolRepositorySaveCache } from '../../data/protocols/repositorySaveCache.ts'
import { type ProtocolRepositoryLoadCache } from '../../data/protocols/repositoryLoadCache.ts'
import { type ProtocolRepositoryDeleteCache } from '../../data/protocols/repositoryDeleteCache.ts'

// implements a repository save cache, load cache and delete cache protocols
export class RepositoryCache implements ProtocolRepositorySaveCache, ProtocolRepositoryLoadCache, ProtocolRepositoryDeleteCache {
  private readonly prefix = 'vtex-helper'
  async save ({ value, id }: ProtocolRepositorySaveCache.Params): ProtocolRepositorySaveCache.Result {
    const valueJson = JSON.stringify(value)
    const key = `${this.prefix}-${id}`

    window.localStorage.setItem(key, valueJson)
  }

  async load ({ id }: ProtocolRepositoryLoadCache.Params): ProtocolRepositoryLoadCache.Result {
    const key = `${this.prefix}-${id}`
    const value = window.localStorage.getItem(key)

    if (!value) return null

    return JSON.parse(value)
  }

  async delete ({ id }: ProtocolRepositoryDeleteCache.Params): ProtocolRepositoryDeleteCache.Result {
    const key = `${this.prefix}-${id}`

    window.localStorage.removeItem(key)
  }
}