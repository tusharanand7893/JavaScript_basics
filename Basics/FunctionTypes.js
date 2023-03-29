// ways we can define functions in JS

function add(a,b){
    return a+b;          //normal way
}
console.log(add(2,3));


//anonymys functions decalration

let sumofNumbers= function(c,d){
    return c+d;
}

console.log(sumofNumbers(2,4));


// we can also write above as fat pipe symbol

let sumofInteger=(c,d)=>c+d;
console.log(sumofInteger(3,4));