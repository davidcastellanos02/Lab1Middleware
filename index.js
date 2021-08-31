const express = require('express')
const app = express()
const script = require('status.js')

var instance1_status
var instance2_status

setInterval(() => {
    instance1_status = script.getStatus('instance1')
    instance2_status = script.getStatus('instance2')
    console.log(instance1_status)
    console.log(instance2_status)
}, 4000)

console.log(instance1_status)
console.log(instance2_status)

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