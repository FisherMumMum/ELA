const express = require('express')()
app = express
app.get('/', (reg,res)=>{
    res.send('<h1>Hello cac ban</h1>')
})
app.get('/nextpage',(reg,res)=>{
    res.send('Chao mung cac ban den voi trang thu 2')
})
app.listen(8080,()=>{
    console.log('running')
})