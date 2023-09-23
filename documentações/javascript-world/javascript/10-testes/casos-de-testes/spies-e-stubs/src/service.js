import crypto from 'node:crypto'

export default class Services {
  hashPassword(password) {
    return crypto.createHash('sha256')
      .update(`${password}`)
      .digest('hex')
  }
}