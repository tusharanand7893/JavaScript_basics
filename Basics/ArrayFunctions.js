//Reduce, Filter, Map, Sort

let marks=[23,44,34,65,64,89,20];

//find sum with reduce function

let totalMarks=marks.reduce((sum,mark)=>sum+mark,0);
console.log(totalMarks);

//filter array elements on condition

let newArray=marks.filter(mark=>mark%2==0);
console.log(newArray);

//map array element with some operation
let mapArray=marks.map(mark=>mark*3);
console.log(mapArray);


//we can also chain this operations as per requirement

//----SORT

//String sort

let fruit=["apple","kiwi","banana","orange","mango","Apple"]

console.log(fruit.sort());
console.log(fruit.reverse());

//number sorting ----sort() function not reliable on Numbers

let numbersArray=[65,4,3,32,56,007];
console.log(numbersArray.sort()); //wrong sorted order=[ 3, 32, 4, 56, 65, 7 ]

//we need to login like bubble sort
let numbersArray1=[65,4,3,32,56,007];
console.log(numbersArray1.sort((a,b)=>a-b)); //Ascending

let numbersArray2=[65,4,3,32,56,007];
console.log(numbersArray2.sort((a,b)=>b-a)); //descending