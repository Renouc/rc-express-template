import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// 获取当前文件所在目录的绝对路径
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const registerRouters = async (app) => {
  const files = fs.readdirSync(path.resolve(__dirname))
  for (const file of files) {
    if (!file.endsWith('router.js')) continue
    const { default: router } = await import(`./${file}`)
    const prefix = file.split('_')[0]
    console.log('prefix:', prefix)
    app.use(`/${prefix}`, router)
  }
}
