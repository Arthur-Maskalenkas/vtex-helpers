import { Switch } from "../../common/switch.tsx";
import { SearchProductProvider, useSearchProductContext } from "./context";
import { ModuleProduct } from "./modules/product/product.tsx";
import { ModuleForm } from "./modules/form/form.tsx";
import { Search } from "./modules/search/search.tsx";
import { Header } from "./components/header.tsx";
import { Container } from "../commons/styled/container/container.tsx";



export const ScreenSearchProduct = () => {
		const { states: { currentModule } } = useSearchProductContext()
		return (
				<Container.Screen>
						<Header/>

						<Switch.Container>
								<Switch.Case condition={currentModule === 'form'}><ModuleForm/></Switch.Case>
								<Switch.Case condition={currentModule === 'search'}><Search/></Switch.Case>
								<Switch.Case condition={currentModule === 'product'}><ModuleProduct/></Switch.Case>
						</Switch.Container>
				</Container.Screen>
		)
}

export const ScreenSearchProductWrapper = () => {
		return (
				<SearchProductProvider>
						<ScreenSearchProduct/>
				</SearchProductProvider>
		)
}