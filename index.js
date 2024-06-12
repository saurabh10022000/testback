require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('Saurabhjain10022000')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login to My Portal</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`)
})