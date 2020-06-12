var express = require('express');
var scarp = require('./scrapper');
var temp = require('./client/temp')
var app =express();
app.get(`/search`,async(req,res)=>{
    id = req.query.id==null?req.params.id:req.query.id;
    if(id=='EN01031169IN'){
        return res.send(temp[0])
    }
    if(id=='EN06316991IN'){
        return res.send(temp[1])
    }
    response = await scarp(id);
    res.send(response);
})
app.use(express.static('./client'))
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log('server is listning'))