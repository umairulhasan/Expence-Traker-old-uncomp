function success(){
    console.log("Done")
}
function failed (){
    console.log("Not done")
}

function answer(value , success, failed){
    value === true ? success() : failed()
}

answer(true, success, failed)