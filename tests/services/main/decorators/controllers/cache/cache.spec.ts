import { describe, expect, it } from 'vitest'
import { DecoratorControllerCache } from '../../../../../../src/services/main/decorators/controllers/cache.ts'
import { BuilderController, BuilderUsecaseLoadCache, BuilderUsecaseSaveCache } from './builders.ts'
import { ProtocolController } from "../../../../../../src/services/presentation/protocols/controller";
import { IUseCaseSaveCache } from "../../../../../../src/services/domain/useCases/saveCache";
import { IUseCaseLoadCache } from "../../../../../../src/services/domain/useCases/loadCache";



namespace Sut {
		export type Params = {
				controllerSpy?: ProtocolController
				usecaseSaveCacheSpy?: IUseCaseSaveCache
				usecaseLoadCacheSpy?: IUseCaseLoadCache
		}
}


const makeSut = (
		{
				controllerSpy = new BuilderController().build(),
				usecaseSaveCacheSpy = new BuilderUsecaseSaveCache().build(),
				usecaseLoadCacheSpy = new BuilderUsecaseLoadCache().build()
		}: Sut.Params = {
				controllerSpy: new BuilderController().build(),
				usecaseSaveCacheSpy: new BuilderUsecaseSaveCache().build(),
				usecaseLoadCacheSpy: new BuilderUsecaseLoadCache().build()
		}
) => {

		const sut = new DecoratorControllerCache(
				controllerSpy,
				usecaseLoadCacheSpy,
				usecaseSaveCacheSpy
		)

		return { sut, controllerSpy, usecaseLoadCacheSpy, usecaseSaveCacheSpy }
}

describe('cacheControllerDecorator Suits', () => {
		describe('tests', () => {
				it('should try load cache  if id is provided', async () => {
						const paramsSpy: any = {
								id: 'param.id',
								controllerArgs: 'param.controllerArgs'
						}
						const { sut, usecaseLoadCacheSpy } = makeSut()
						const result = await sut.handle(paramsSpy)

						expect(usecaseLoadCacheSpy.load).toHaveBeenCalledWith({ id: paramsSpy.id })

						expect(result).toStrictEqual({
								isCached: true,
								data: 'cache.result'
						})
				})

				it('should call only controller if id is not provided', async () => {
						const paramsSpy: any = { controllerArgs: 'param.controllerArgs' }

						const { sut, controllerSpy } = makeSut()

						const result = await sut.handle(paramsSpy)

						expect(controllerSpy.handle).toHaveBeenCalledWith(paramsSpy.controllerArgs)

						expect(result).toStrictEqual({
								isCached: false,
								data: 'controller.result'
						})
				})

				it('should call controller and save data if cache not returns data', async () => {
						const paramsSpy: any = {
								id: 'param.id',
								controllerArgs: 'param.controllerArgs'
						}
						const usecaseLoadCacheSpy = new BuilderUsecaseLoadCache().returnNull().build()
						const { sut, controllerSpy, usecaseSaveCacheSpy } = makeSut({ usecaseLoadCacheSpy })

						const result = await sut.handle(paramsSpy)

						expect(usecaseSaveCacheSpy.save).toHaveBeenCalledWith({ id: paramsSpy.id, value: 'controller.result' })
						expect(controllerSpy.handle).toHaveBeenCalledWith(paramsSpy.controllerArgs)

						expect(result).toStrictEqual({
								isCached: false,
								data: 'controller.result'
						})
				})
		})
})