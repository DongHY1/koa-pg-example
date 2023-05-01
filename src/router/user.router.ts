import KoaRouter from '@koa/router'
import { userController } from '../controller/user.controller.js'
// http POST localhost:8000/users name=dong password=123456

export const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.get('/list', (ctx) => {
  ctx.body = 'user'
})
userRouter.post('/', userController.createUser)
