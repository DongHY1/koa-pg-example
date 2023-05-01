import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { userRouter } from '../router/index.js'

export const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
