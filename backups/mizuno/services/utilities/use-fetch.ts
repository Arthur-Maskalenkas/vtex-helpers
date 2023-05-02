export const useFetch = async <A = any>(url: string): Promise<A> => {
  const response = await fetch(url)
  const responseJson = await response.json()

  return responseJson
}
