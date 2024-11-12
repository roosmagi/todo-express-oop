import express from 'express'
import bodyParser from 'body-parser'

import todoRoutes from './routes/todos.js'

const app = express()
app.use(bodyParser.json())

app.use(express.urlencoded({extended: true}))

app.use('/todos', todoRoutes)

app.listen(3002, () => {
    console.log('App is started at http://localhost:3002')
})