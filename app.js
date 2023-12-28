const express = require('express')()
require('dotenv').config()
app = express
hostname = process.env.HOST_NAME 
port = process.env.PORT || 8080
app.set('views','./')
app.set('view engine','ejs')
app.get('/',(reg ,res)=>{
    // res.send('<h1>Chao cac ban</h1>')
    res.render('sample')
})
app.listen(port,hostname,()=>{
    console.log('Running')
})