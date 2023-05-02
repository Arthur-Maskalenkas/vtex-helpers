// https://regex101.com/r/5dVM9R/1
export const validatePhone = (value: string) => {
  const regex = /([0-9]|\(|\)|\+| |-)+/

  return regex.test(value)
}
