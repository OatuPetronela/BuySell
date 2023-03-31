import express from 'express'
import categories from './data/categories.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import colors from "colors"

dotenv.config()

connectDB()

const app = express();

app.get('/categories', (req, res)=>{
    res.json(categories)
})

const PORT = process.env.PORT||8000
app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold)) 