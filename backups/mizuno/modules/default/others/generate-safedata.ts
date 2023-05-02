export type SafeDataParams = {
  type?: 'document' | 'search'
  entity?: 'CL'
}

export const generateSafedata = ({ entity = 'CL', type = 'document' }: SafeDataParams) => {
  const devRegex = /myvtex/
  const isDevelopment = devRegex.test(window.location.href)
  const url = isDevelopment
    ? `/api/dataentities/${entity}/${type}`
    : `/safedata/${entity}/${type}`

  return url
}
