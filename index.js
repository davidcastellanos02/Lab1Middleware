const express = require('express')
const app = express()
const script = require('./source/status')

var instance1_status
var instance2_status

setInterval(() => {
    instance1_status = script.getStatus()
    //instance2_status = script.getStatus()
    console.log("En index: "+instance1_status)
}, 4000)

app.get('/', (req, res) =>{
        res.sendFile(__dirname+'/index.html')
})

function checkStatus(){
    if(instance1_status == 200){
        res.send('index.html')
    }else {
        res.send('restart.html')
    }   
}

app.listen(1111)