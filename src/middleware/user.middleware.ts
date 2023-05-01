import type { Context, Next } from 'koa'
import { userService } from '../server/user.service.js'
import type { IUser } from '../types'

export async function checkUserMiddleware(ctx: Context, next: Next) {
  const user = ctx.request.body as IUser
  if (!user.name || !user.password) {
    ctx.body = {
      code: -1001,
      message: '用户名或密码不能为空',
    }
    return
  }
  const findUserResult = await userService.findUserByName(user.name)
  const isRegister = findUserResult !== ''
  if (isRegister) {
    ctx.body = {
      code: -1002,
      message: '用户名已存在',
    }
    return
  }
  await next()
}
