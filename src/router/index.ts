import KoaRouter from '@koa/router'

export const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.get('/list', (ctx) => {
  ctx.body = 'user'
})
