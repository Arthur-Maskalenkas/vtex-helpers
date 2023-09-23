import { describe, it, expect, beforeEach, jest } from '@jest/globals'
import Service from '../src/service.js'

import crypto from 'node:crypto'

//
// * Testando o retorno de funções
//

//
// * Existe um clear mocks antes de cada teste, na configuração do jest
//
describe('Service Test Suite', () => {
  let _service
  const MOCKED_HASH_PWD = 'hashedpassword'

  describe('#create - spies', () => {
    beforeEach(() => {
      jest.spyOn(crypto, crypto.createHash.name)
        .mockReturnValue({
          update: jest.fn().mockReturnThis(),
          digest: jest.fn().mockReturnValue(MOCKED_HASH_PWD),
        })


      _service = new Service()
    })

    it('should call appendFile with right params', async () => {
      const input = { password: 'passs1' }
      await _service.hashPassword(input.password)

      // * 💡 Como o jest ja substitui a implementação do nodejs pela implementação do jest, é possivel usar o toHaveBeenCalledTimes
      expect(crypto.createHash).toHaveBeenCalledTimes(1)
      expect(crypto.createHash).toHaveBeenCalledWith('sha256')

      const hash = crypto.createHash('sha256')
      expect(hash.update).toHaveBeenCalledWith(input.password)
      expect(hash.digest).toHaveBeenCalledWith('hex')
    })

  })
})