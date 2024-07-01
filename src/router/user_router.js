import express from 'express'

const homeRouter = express.Router()

homeRouter.get('/list', (req, res) => {
  res.send({
    code: 200,
    data: [
      {
        id: 1,
        name: '轩辕',
        age: 17,
      },

      {
        id: 2,
        name: '蚩尤',
        age: 18,
      },
    ],
  })
})

export default homeRouter
