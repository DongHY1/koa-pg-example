import crypto from 'node:crypto'

export function encryptPassword(password: string): string {
  const hash = crypto.createHash('md5')
  return hash.update(password).digest('hex')
}
