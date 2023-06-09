import type { Context } from 'koa'
import { userService } from '../service/user.service.js'
import type { IUser } from '../types/index.js'

class UserController {
  async createUser(ctx: Context) {
    const user = ctx.request.body as IUser
    const name = await userService.createUser(user)
    ctx.body = {
      message: '创建用户成功',
      data: {
        name,
      },
    }
  }
}
export const userController = new UserController()
