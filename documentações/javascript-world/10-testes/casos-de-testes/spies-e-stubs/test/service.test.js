import { describe, it, expect, beforeEach, jest } from '@jest/globals'

import crypto from 'node:crypto'

class Services {
  hashPassword(password) {
    return crypto.createHash('sha256')
      .update(`${password}`)
  }
}

describe('Service Test Suite', () => {
  let _service

  describe('#create - spies', () => {
    beforeEach(() => {
      jest.spyOn(crypto, crypto.createHash.name)
        // tanto faz o retorno do update, pois não vamos testar o retorno, e sim a chamada do metodo
        .mockReturnValue({ update: jest.fn().mockReturnThis() })

      _service = new Services()
    })

    it('should call appendFile with right params', async () => {
      const password = 'any_password'
      await _service.hashPassword(password)

      // criando a instancia do hash
      const hash = crypto.createHash('sha256')

      // verificando se o metodo update foi chamado com o parametro password
      expect(hash.update).toHaveBeenCalledWith(password)
    })

  })
})