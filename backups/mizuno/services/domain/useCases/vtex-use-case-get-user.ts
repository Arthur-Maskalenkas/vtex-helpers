export interface VtexUseCaseGetUser {
  handle: () => VtexUseCaseGetUser.Response
}

export namespace VtexUseCaseGetUser {
  export type Response = Promise<string>

  export type ProfileApi = {
    UserId: string
    IsReturningUser: boolean
    FirstName: string
    LastName: string
    Gender: string
    Email: string
    IsUserDefined: boolean
  }
}
