var express = require('express');
var scarp = require('./scrapper');
var app =express();
app.get(`/search/:id`,async(req,res)=>{
    id = req.params.id;
    console.log(id)
    response = await scarp(id);
    res.send(response);
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log('server is listning'))