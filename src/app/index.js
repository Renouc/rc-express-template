import express from 'express'

import { registerRouters } from '../router/index.js'

const app = express()

// 注册路由
registerRouters(app)

export default app
