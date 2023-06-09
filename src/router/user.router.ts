import KoaRouter from '@koa/router'
import { userController } from '../controller/user.controller.js'
import { checkUserMiddleware, encryptPasswordMiddleware } from '../middleware/user.middleware.js'

export const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.post('/', checkUserMiddleware, encryptPasswordMiddleware, userController.createUser)
