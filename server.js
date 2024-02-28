const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const budget = require('./server/api')

module.exports = app


app.use(bodyParser.json())

const PORT = process.env.PORT || 8000

app.use('/budget', budget)


app.listen(PORT, (req, res, next) => {
    console.log(`Listening on PORT: ${PORT}`)
})