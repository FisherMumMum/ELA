const path = require('path')
const exp = require('express')()
const express = require('express')
require('dotenv').config()
app = exp
hostname = process.env.HOST_NAME 
port = process.env.PORT || 8080
app.set('views','./')
app.set('view engine','ejs')
app.use('/public', express.static(path.join(__dirname, '/public')))
app.get('/',(reg ,res)=>{
    // res.send('<h1>Chao cac ban</h1>')
    res.render('sample')
})
app.listen(port,hostname,()=>{
    console.log('Running')
    console.log(__dirname)
})