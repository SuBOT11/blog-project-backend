/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import errorHandler from './middleware/errorMiddleware.js'
import authorRoutes from './routes/authorRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import commentRoutes from './routes/commentRoutes.js'
dotenv.config()

// database connected
connectDB()

// Node app initiated
const app = express()
app.use(bodyParser.json())
const __dirname = path.resolve()
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.get('/home', (req, res) => {
  res.send('Api is running')
})

app.get('/', (req, res) => {
  res.send('Api running...')
})

app.use('/api/author/', authorRoutes)
app.use('/api/blog/', blogRoutes)
app.use('/api/comment/', commentRoutes)

app.use(errorHandler)
// const port
const PORT = process.env.PORT || 8232

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .italic
  )
})
