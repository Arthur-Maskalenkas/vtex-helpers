import { type ProtocolLocalStorageSaveCache } from '../../data/protocols/localStorage/localStorageSaveCache.ts'
import { type ProtocolLocalStorageLoadCache } from '../../data/protocols/localStorage/localStorageLoadCache.ts'
import { type ProtocolRepositoryDeleteCache } from '../../data/protocols/repositoryDeleteCache.ts'

// implements a repository save cache, load cache and delete cache protocols
export class LocalStorageCache implements ProtocolLocalStorageSaveCache, ProtocolLocalStorageLoadCache, ProtocolRepositoryDeleteCache {
		private readonly prefix = 'vtex-helper'

		async save({ value, id }: ProtocolLocalStorageSaveCache.Params): ProtocolLocalStorageSaveCache.Result {
				const valueJson = JSON.stringify(value)
				const key = `${this.prefix}-${id}`

				window.localStorage.setItem(key, valueJson)
		}

		async load({ id }: ProtocolLocalStorageLoadCache.Params): ProtocolLocalStorageLoadCache.Result {
				const key = `${this.prefix}-${id}`
				const value = window.localStorage.getItem(key)

				if (!value) return null

				return JSON.parse(value)
		}

		async delete({ id }: ProtocolRepositoryDeleteCache.Params): ProtocolRepositoryDeleteCache.Result {
				const key = `${this.prefix}-${id}`

				window.localStorage.removeItem(key)
		}
}