var express = require('express');
var scarp = require('./scrapper');
var app =express();
app.get(`/search`,async(req,res)=>{
    id = req.query.id==null?req.params.id:req.query.id;
    response = await scarp(id);
    res.send(response);
})
app.use(express.static('./client'))
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log('server is listning'))
