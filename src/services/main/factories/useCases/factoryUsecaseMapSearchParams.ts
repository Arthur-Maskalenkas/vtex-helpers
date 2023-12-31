import { UsecaseMapSearchParams } from '../../../data/useCases/mapSearchParams.ts'
import { MapperSearchPageParams } from '../../../infra/mapper/params/searchPageParams.ts'



export const FactoryUsecaseMapSearchParams = () => {
		return new UsecaseMapSearchParams(new MapperSearchPageParams())
}