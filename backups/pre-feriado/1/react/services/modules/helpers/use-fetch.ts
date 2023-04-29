export const useFetch = async <A = any>(url: string): Promise<A> => {
  return await fetch(url).then(async data => await data.json())
}