import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import userRouter from './resources/user/user.router'

export const app = express();
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/api/user', userRouter)

export const start = () => {
  app.listen(3001, () => {
    console.log('server is started');
  })
};
