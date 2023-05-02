export type ResponseGetProfileSystemApi = {
  UserId: string,
  IsReturningUser: boolean,
  FirstName: string,
  LastName: string,
  Gender: string,
  Email: string,
  IsUserDefined: boolean
}

export const getProfileSystem = async function ():Promise<ResponseGetProfileSystemApi> {
  const response = await fetch('/no-cache/profileSystem/getProfile')
  const profile = await response.json();

  return profile
}
