import express, { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import { router } from './routes/routes'
import mongoose, { ConnectOptions } from 'mongoose'

dotenv.config()
const app = express()

mongoose.connect(
  process.env.MONGODB_URL as string,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } as ConnectOptions,
  (res) => {
    console.log('Connected to Distribution API Database - Initial Connection')
  },
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', router)

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`)
})
