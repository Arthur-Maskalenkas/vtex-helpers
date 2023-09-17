import { describe, it, expect, vi, type Mock, beforeEach, afterEach } from 'vitest'
import { DecoratorControllerCache } from '../../../../../../src/services/main/decorators/controllers/cache.ts'
import { BuilderController, BuilderUsecaseLoadCache, BuilderUsecaseSaveCache } from './builders.ts'

describe('cacheControllerDecorator', () => {
  let controllerSpy = new BuilderController().build()
  let usecaseLoadCacheSpy = new BuilderUsecaseLoadCache().build()
  let usecaseSaveCacheSpy = new BuilderUsecaseSaveCache().build()
  let paramsSpy: any = {
    id: 'param.id',
    controllerArgs: 'param.controllerArgs'
  }

  const makeSut = () => {
    const sut = new DecoratorControllerCache(
      controllerSpy,
      usecaseLoadCacheSpy as any,
      usecaseSaveCacheSpy as any
    )

    return sut
  }

  afterEach(() => {
    vi.clearAllMocks()
    paramsSpy = {
      id: 'param.id',
      controllerArgs: 'param.controllerArgs'
    }
  })

  describe('tests', () => {
    it('should try load cache  if id is provided', async () => {
      const sut = makeSut()

      const result = await sut.handle(paramsSpy)

      expect(usecaseLoadCacheSpy.load).toHaveBeenCalledWith({ id: paramsSpy.id })

      expect(result).toStrictEqual({
        isCached: true,
        data: 'cache.result'
      })
    })

    it('should call only controller if id is not provided', async () => {
      paramsSpy = {
        controllerArgs: 'param.controllerArgs'
      }

      const sut = makeSut()

      const result = await sut.handle(paramsSpy)

      expect(controllerSpy.handle).toHaveBeenCalledWith(paramsSpy.controllerArgs)

      expect(result).toStrictEqual({
        isCached: false,
        data: 'controller.result'
      })
    })

    it('should call controller and save data if cache not returns data', async () => {
      usecaseLoadCacheSpy = new BuilderUsecaseLoadCache().returnNull().build()

      const sut = makeSut()
      const result = await sut.handle(paramsSpy)

      expect(controllerSpy.handle).toHaveBeenCalledWith(paramsSpy.controllerArgs)
      expect(usecaseSaveCacheSpy.save).toHaveBeenCalledWith({ id: paramsSpy.id, value: 'controller.result' })

      expect(result).toStrictEqual({
        isCached: false,
        data: 'controller.result'
      })
    })
  })
})