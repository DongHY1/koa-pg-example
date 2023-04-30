import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { PORT } from './config.js'
import { userRouter } from './router/index.js'

const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(PORT, 'is listening')
})
