export class HelperFetch {

	public static async getData<A = any>(url: string, header?: RequestInit): Promise<A> {
		const response = await fetch(url, header)
		return await response.json()
	}
}