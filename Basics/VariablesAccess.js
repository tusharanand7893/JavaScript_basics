// Access level of var, let and const

let variableLet="human";

if(true){
   // variableLet="redeclare let"     // inside block cannot declare global var need into initialise first
    let variableLet="human beign"; // let cannot reinialise inside the block
}

console.log(variableLet);
//---------------------------------------//

var variableVar="alpha";

if(true){
    var variableVar="alpha beta"; // var can be reinialise & redeclare inside the block
}

console.log(variableVar);

//---------------------------------------//

const variableConst="delta";
// variableConst="sigma"    //const cannot be reinialise we can use for element locators
if(true){
    const variableConst="figma"; //  // const cannot reinialise inside the block
}

console.log(variableConst);

//---------------------------------------// const and let are same but const cannot be reinialise.