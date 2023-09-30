import { Switch } from "../../common/switch.tsx";
import { SearchProductProvider, useSearchProductContext } from "./context";
import { ModuleProduct } from "./modules/product.tsx";
import { ModuleForm } from "./modules/form/form.tsx";
import { Search } from "./modules/search.tsx";
import { Header } from "./components/header.tsx";



export const ScreenSearchProduct = () => {
		const { states: { currentModule } } = useSearchProductContext()
		console.log(currentModule);
		return (
				<div className={'container-inside-content'}>
						<Header/>

						<Switch.Container>
								<Switch.Case condition={currentModule === 'form'}><ModuleForm/></Switch.Case>
								<Switch.Case condition={currentModule === 'search'}><Search/></Switch.Case>
								<Switch.Case condition={currentModule === 'product'}><ModuleProduct/></Switch.Case>
						</Switch.Container>
				</div>
		)
}

export const ScreenSearchProductWrapper = () => {
		return (
				<SearchProductProvider>
						<ScreenSearchProduct/>
				</SearchProductProvider>
		)
}