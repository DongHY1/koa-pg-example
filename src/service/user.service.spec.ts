import { describe, expect, it } from 'vitest'
import { userService } from './index.js'

describe('User Servive Unit Test', () => {
  describe('User Register', () => {
    it.skip('if no same username in the database, registration should be successful,if there is a same username in the database, registration should be failed', async () => {
      const name = 'test1'
      const password = ' test1'
      const returnUserName = await userService.createUser({ name, password })
      expect(returnUserName).toEqual(name)
      const returnUndefinedUserName = await userService.createUser({ name, password })
      expect(returnUndefinedUserName).toEqual(undefined)
    })
    it('find user in database', async () => {
      const name = 'test1'
      const returnUserName = await userService.findUser(name)
      expect(returnUserName).toEqual(name)
    })
  })
})
