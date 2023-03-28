 //initialize the array
let marks=new Array(20,23,2,3,2,3);

marks2=[20,34,35,87,23,12,10,1]; //array initialise 2



console.log(marks2);

marks2[2]=111; //update value at index

console.log(marks2);

marks2.push(121); // push value at the last

console.log(marks2);

marks2.pop(121); // remove value at the last

console.log(marks2);

marks2.unshift(122); // add value in the start 0th indx

console.log(marks2);

console.log(marks2.includes(122)); // check element present in array

subarray=marks.slice(1,4); //make subarray

console.log(subarray);