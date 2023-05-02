import { afterEach, describe, expect, it, vi } from 'vitest'
import { userService } from './index.js'

describe('User Servive Unit Test', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  describe('User Register', () => {
    it('if no same username in the database, registration should be successful', async () => {
      const name = 'test'
      const password = 'test'
      const spy = vi.spyOn(userService, 'createUser').mockResolvedValueOnce(name)
      const returnUserName = await userService.createUser({ name, password })
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveReturnedWith(name)
      expect(returnUserName).toEqual(name)
    })
    it('find user in database', async () => {
      const name = 'test'
      const spy = vi.spyOn(userService, 'findUser').mockResolvedValue(name)
      const returnUserName = await userService.findUser(name)
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveReturnedWith(name)
      expect(returnUserName).toEqual(name)
    })
  })
})
