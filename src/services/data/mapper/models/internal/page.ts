import { ExternalModelRuntime } from "../../../../domain/external/models/runtime.ts";
import { InternalModelPage } from "../../../../domain/internal/models/page.ts";



export class MapperInternalModelPage {

		private constructor() {
		}

		static mapExternalModelRuntimePages(models: Record<string, ExternalModelRuntime.Pages>): InternalModelPage[] {
				const pages = new Set<InternalModelPage>()

				for (const value of Object.values(models)) {

						const modelPage = new InternalModelPage(value)

						pages.add(modelPage)
				}

				return [ ...pages ] ?? []
		}

}