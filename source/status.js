var exec = require('child_process').exec

function getStatus(){
    var result
    exec('./status.sh', function (err, stdout, stderr){
        result = stdout
        console.log("stdout"+stdout)
        console.log("err "+err)
        console.log("stderr "+stderr)
    })
    return result
}

module.exports = {
    "getStatus" : getStatus
}

//57