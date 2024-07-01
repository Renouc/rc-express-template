import { APP_PORT } from './app/config.js'

import app from './app/index.js'

app.listen(APP_PORT, () => {
  console.log('Example app listening on port 3000!')
})
