export default class Service {
  #filename
  constructor({ filename }) {
    this.#filename = filename
  }

  #hashPassword(password) {
    return crypto.createHash('sha256')
      .update(password)
      .digest('hex')
  }

  create({ username, password }) {
    const data = JSON.stringify({
      username,
      password: this.#hashPassword(password),
      createdAt: new Date().toISOString()
    }).concat('\n')

    return fs.appendFile(this.#filename, data)
  }
  async read() {
    const lines = (await fs.readFile(this.#filename, 'utf8'))
      .split('\n')
      .filter(line => !!line)

    if (!lines.length) return []

    return lines
      .map(line => JSON.parse(line))
      .map(({ password, ...rest }) => ({ ...rest }))
  }
}

//
// * Testando o retorno de funções
//

//
// * Existe um clear mocks antes de cada teste, na configuração do jest
//
describe('Service Test Suite', () => {
  let _service
  const filename = 'testfile.ndjson'
  const MOCKED_HASH_PWD = 'hashedpassword'

  describe('#create - spies', () => {
    beforeEach(() => {
      jest.spyOn(crypto, crypto.createHash.name)
        .mockReturnValue({
          update: jest.fn().mockReturnThis(),
          digest: jest.fn().mockReturnValue(MOCKED_HASH_PWD),
        })

      jest.spyOn(fs, fs.appendFile.name).mockResolvedValue()

      _service = new Service({ filename })
    })

    it('should call appendFile with right params', async () => {
      // AAA - Arrange, Act, Assert
      const input = { username: 'user1', password: 'passs1' }

      const expectedCreatedAt = new Date().toISOString()
      //
      // * 📌 Arrange
      //
      // * 🔍 Usando um stub para retornar um valor fixo
      jest.spyOn(Date.prototype, Date.prototype.toISOString.name,).mockReturnValue(expectedCreatedAt)

      //
      // * 📌 Act
      //
      await _service.create(input)

      //
      // * 📌 Assert
      //

      // * 💡 Como o jest ja substitui a implementação do nodejs pela implementação do jest, é possivel usar o toHaveBeenCalledTimes
      expect(crypto.createHash).toHaveBeenCalledTimes(1)
      expect(crypto.createHash).toHaveBeenCalledWith('sha256')

      const hash = crypto.createHash('sha256')
      expect(hash.update).toHaveBeenCalledWith(input.password)
      expect(hash.digest).toHaveBeenCalledWith('hex')

      const expected = JSON
        .stringify({ ...input, createdAt: expectedCreatedAt, password: MOCKED_HASH_PWD })
        .concat('\n')

      expect(fs.appendFile)
        .toHaveBeenCalledWith(filename, expected)
    })

  })
})