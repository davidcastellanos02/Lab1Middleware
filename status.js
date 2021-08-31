var spawn = require('child_process').spawn

function getStatus(instance){
    var result
    exec('./status.sh', function (err, stdout, stderr){
        result = stdout
    })
    return result
}