import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

import taskRoutes from './routes'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json'}))

app.use(cors())
app.use(morgan('dev'))

app.use('/api', taskRoutes)

app.use(express.static(path.join(__dirname, '..','..', 'dist')))

export default app