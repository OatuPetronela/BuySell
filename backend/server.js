const express = require('express');
const categories =require('./data/categories')

const app = express();

app.get('/categories', (req, res)=>{
    res.json(categories)
})


app.listen(5000, console.log('Server started on port 5000'))