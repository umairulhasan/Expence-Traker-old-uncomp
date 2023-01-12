const a = [1,2,3,4]
const b = a.map(newarray)

function newarray (x){

    return x * 10;
}


console.log(a)    //return  [1,2,3,4]
console.log(b)    // return new array without destrub a  [10, 20, 30 40]