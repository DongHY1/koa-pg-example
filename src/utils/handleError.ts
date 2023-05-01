import { app } from '../app/index.js'
import { ErrorCode, ErrorMessage, ErrorStatus } from '../types/index.js'

app.on('error', (err, ctx) => {
  let code = 0
  let message = ''
  switch (err) {
    case ErrorStatus.NameOrPasswordIsNull:
      code = ErrorCode.NameOrPasswordIsNull
      message = ErrorMessage.NameOrPasswordIsNull
      break
    case ErrorStatus.NameIsRegistered:
      code = ErrorCode.NameIsRegistered
      message = ErrorMessage.NameIsRegistered
      break
  }
  ctx.body = { code, message }
})
