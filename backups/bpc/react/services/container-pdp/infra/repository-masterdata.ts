import { MDV1BP } from "../../../typings/apis/md-v1-bp"
import { HelperFetch } from "../helpers/fetch"


export class RepositoryMasterdata {
	public putDataOnTableBP(postBody: MDV1BP.Params): Promise<MDV1BP.Response> {
		const api = `/api/dataentities/BP/documents`

		const headerConfig: RequestInit = {
			method: "PUT",
			"mode": "cors",
			"credentials": "include",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(postBody)
		}


		return HelperFetch.getData(api, headerConfig)
	}
}