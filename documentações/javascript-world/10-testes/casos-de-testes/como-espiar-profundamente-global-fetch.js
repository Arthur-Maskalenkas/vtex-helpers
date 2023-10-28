// é importante lembrar que a ordem importa.

// a ordem importa. Até aqui ela não foi chamada nenhuma vez
console.log(fetchSpy.mock.calls)
// console.log
//   []
const result = await sut.get(params)

// porém aqui ela foi chamada uma vez
const result = await sut.get(params)
console.log(fetchSpy.mock.calls)
// console.log
// [{...}]

// Resumindo: como jest.fn é sempre uma função, você precisa chamar ela para obter os valores mokados.

describe(` ${ClientProfileUpdater.name} Tests Suite`, () => {
  let fetchSpy: jest.SpyInstance<any, any>

  beforeEach(() => {
    const spyfn = jest.fn().mockResolvedValue(
      {
        json: jest.fn().mockResolvedValue('any_value')
      } as any) as any

    jest.clearAllMocks()
    // global.fetch não existe. Então eu mesmo crio.
    global.fetch = spyfn
    fetchSpy = spyfn
  })

  const sut = makeSut()
  const result = await sut.get(params)

  // é importante lembrar que o fetchSpy ja possui todas as chamadas referentes a ele, junto ao valor que precisa retornar, e por isso que mesmo que eu chame ele depois do fluxo ocorrer é possivel ver o valor que ele retornou e as chamadas que ele recebeu. (até para os filhos)
  const fetchResolved = await fetchSpy()


  console.log(fetchSpy.mock.results[0])
  console.log(fetchResolved.json.mock)
  // console.log
  // { type: 'return', value: Promise { { json: [Function] } } }
  //
  // at _callee3$ (__tests__/components/ValidateOrderformData/SessionUpdater/clientProfileUpdater.test.ts:103:23)
  //
  // console.log
  // {
  //   calls: [ [] ],
  //     instances: [ { json: [Function] } ],
  //   invocationCallOrder: [ 2 ],
  //   results: [ { type: 'return', value: 'any_value' } ]
  // }
  //
  // at _callee3$ (__tests__/components/ValidateOrderformData/SessionUpdater/clientProfileUpdater.test.ts:51:51)
})