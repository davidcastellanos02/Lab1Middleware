var exec = require('child_process').exec

function getStatus(instance){
    var result
    exec('./status.sh', function (err, stdout, stderr){
        result = stdout
    })
    return result
}

module.exports = {
    "getStatus" : getStatus
}

//57