const express = require('express')
const app = express()

const printJSON = (json) => {
  console.log(JSON.stringify(json, null, '  '))
}

let counter = 0
const logMiddleware = (req, res, next) => {
  printJSON(req.headers)
  printJSON(req.body)
  next()
}

app
  .use(logMiddleware)  
  .use(express.urlencoded({ extended: false }))
  .use(logMiddleware)  

app.all('*', (req, res) => {
  res.send('yo')
})

app.listen(8000)
