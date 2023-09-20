export const mapParams = (event: React.FormEvent<HTMLFormElement>) => {
  const inputValues = Array.from(event.currentTarget.elements)

  const params: string[] = []

  for (const input of inputValues) {
    const [id, value, thisInputHaveValue] = ['id', 'value', 'data-with-value']
      .map(attr => input?.attributes?.getNamedItem(attr)?.value)

    if (input?.id && value) {
      if (!thisInputHaveValue) {
        params.push(`${id}=${value}`)
        continue
      }

      const [splitId, splitValue] = value.split('=')

      if (!splitValue) continue

      params.push(`${id}=${splitId}=${splitValue}`)
    }
  }

  return params?.length ? params.join(',') : null
}