const express = require('express')()
app = express
app.set('views','./')
app.set('view engine','ejs')
app.get('/',(reg ,res)=>{
    res.send('<h1>Chao cac ban</h1>')
    res.render('sample')
})
app.listen(8080,()=>{
    console.log('Running')
})