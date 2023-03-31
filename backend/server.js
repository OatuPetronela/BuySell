import express from 'express'
import categories from './data/categories.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.get('/categories', (req, res)=>{
    res.json(categories)
})

const PORT = process.env.PORT
app.listen(PORT, console.log(`Server started on port ${PORT}`)) 