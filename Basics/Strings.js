let str="Tushar Anand and Java Scripts";
let str2="test";

console.log(str.charAt(7)); //return char at index

console.log(str.concat(" abcd")); //concate
console.log(str.concat(str2)); //concate

console.log(str.indexOf("and")); //get index of string/char

let subString=str.slice(7,15); //get subString
console.log(subString); 

let splitArrayfromString=str.split(" "); //split string and store in array
console.log(splitArrayfromString);