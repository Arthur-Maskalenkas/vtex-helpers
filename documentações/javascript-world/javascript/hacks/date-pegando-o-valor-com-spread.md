# pegando o valor de datas passadas
# hack pegando o valor de datas passadas

const mapDate = (date) => {
  // "from": "2009-01-01"
  const [year, month, day] = date.split('-').map(Number)

  // datas do js começam no 0
  return new Date(year, (month - 1), day)
}