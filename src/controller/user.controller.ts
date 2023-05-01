import type { Context } from 'koa'
import { userService } from '../server/user.service.js'
import type { IUser } from '../types/index.js'

class UserController {
  async createUser(ctx: Context) {
    const user = ctx.request.body as IUser
    if (!user.name || !user.password) {
      ctx.body = {
        code: -1001,
        message: '用户名或密码不能为空',
      }
    }
    else {
      const findUserResult = await userService.findUserByName(user.name)
      if (findUserResult !== '') {
        ctx.body = {
          code: -1002,
          message: '用户名已存在',
        }
      }
      else {
        const name = await userService.createUser(user)
        ctx.body = {
          message: '创建用户成功',
          data: {
            name,
          },
        }
      }
    }
  }
}
export const userController = new UserController()
