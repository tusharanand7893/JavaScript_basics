let str="Tushar Anand and Java Scripts";
let str2="test";

console.log(str.charAt(7)); //return char at index

console.log(str.concat(" abcd")); //concate
console.log(str.concat(str2)); //concate

console.log(str.indexOf("and")); //get index of string/char if not found it will return -1

let subString=str.slice(7,15); //get subString
console.log(subString); 

let splitArrayfromString=str.split(" "); //split string and store in array
console.log(splitArrayfromString);

console.log(str.length); //length of String


var a="23";
var b="27"; //find difference of b-a

console.log(parseInt(b)-parseInt(a));

//convert toString
let c=12232;
console.log(c.toString().length);


//find the number of 'and' in str='Tushar Anand and Java Scripts'

let count=0;
let index=str.indexOf("and");
while(index!=-1){
    count++;
    index=str.indexOf("and",index+1);
    
}
console.log("count of and= "+count);

