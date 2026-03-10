import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { profileRouter } from './routes/profile'
import { planRouter } from './routes/plan'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

// API Routes
app.use("/api/v1/profile", profileRouter)
app.use("/api/v1/plan", planRouter)

app.listen(PORT, ()=> {
    console.log( `Server running on ${PORT} port`)
})
