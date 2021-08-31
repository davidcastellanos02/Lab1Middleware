var spawn = require('child_process').spawn

function getStatus(instance){
    var result
    exec(instance, function (err, stdout, stderr){
        result = stdout
    })
    return result
}