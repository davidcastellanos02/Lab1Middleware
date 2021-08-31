const express = require('express')
const app = express()
const script = require('./scripts/status')

var instance1_status
var instance2_status

setInterval(() => {
    instance1_status = script.getStatus('instance1')
    instance2_status = script.getStatus('instance2')
}, 4000)


app.get('/status1', (req, res) =>{
    if(instance1_status == 200){
        res.sendStatus(200)
    }else {
        res.sendStatus(404)
    }
})

app.get('/status2', (req, res) =>{
    if(instance2_status == 200){
        res.sendStatus(200)
    }else {
        res.sendStatus(404)
    }
})

app.post('/restart1', (req, res) => {

})

app.post('/restart2', (req, res) => {

})

app.listen(1122)