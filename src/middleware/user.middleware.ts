import type { Context, Next } from 'koa'
import { userService } from '../service/user.service.js'
import type { IUser } from '../types/index.js'
import { ErrorStatus } from '../types/index.js'
import { encryptPassword } from '../utils/encryptPassword.js'

export async function checkUserMiddleware(ctx: Context, next: Next) {
  const user = ctx.request.body as IUser
  if (!user.name || !user.password)
    return ctx.app.emit('error', ErrorStatus.NameOrPasswordIsNull, ctx)

  const findUserResult = await userService.findUser(user.name)
  const isRegister = findUserResult !== ''
  if (isRegister)
    return ctx.app.emit('error', ErrorStatus.NameIsRegistered, ctx)
  await next()
}
export async function encryptPasswordMiddleware(ctx: Context, next: Next) {
  const user = ctx.request.body as IUser
  user.password = encryptPassword(user.password)
  ctx.request.body = user
  await next()
}
