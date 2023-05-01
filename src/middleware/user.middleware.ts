import type { Context, Next } from 'koa'
import { userService } from '../server/user.service.js'
import type { IUser } from '../types/index.js'
import { ErrorStatus } from '../types/index.js'

export async function checkUserMiddleware(ctx: Context, next: Next) {
  const user = ctx.request.body as IUser
  if (!user.name || !user.password)
    return ctx.app.emit('error', ErrorStatus.NameOrPasswordIsNull, ctx)

  const findUserResult = await userService.findUserByName(user.name)
  const isRegister = findUserResult !== ''
  if (isRegister)
    return ctx.app.emit('error', ErrorStatus.NameIsRegistered, ctx)

  await next()
}
