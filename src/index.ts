import './utils/handleError.js'
import { app } from './app/index.js'
import { PORT } from './config.js'

app.listen(PORT, () => {
  console.log(`${PORT} is Listening...`)
})
