// Objects are collection of properties

let weekDays={
    firstday:"Monday",   //properties stored in form of key value pair
    secondDay:"Tuesday",
    thridDay:"Wednesday"
}

//access properties value from object
console.log(weekDays.firstday);
console.log(weekDays['secondDay']); 

//assinging value
console.log(weekDays);
weekDays.thridDay="new Wednesday";
console.log(weekDays);

//adding and removing properties
weekDays.fourthday="Thursday";
weekDays.fifthDay="Friday";
console.log(weekDays);
delete weekDays.fifthDay;
console.log(weekDays);

//check if propery is present

console.log('firstday' in weekDays);

//to itrate over al values

for(let key in weekDays){
    console.log("weekDays key value= "+weekDays[key]);
}

//add function in properties of object

let person={
    firstname:"Tushar",
    lastname:"Anand",
    fullname:function(){
        return this.firstname+" "+this.lastname
    }
}

console.log(person.fullname()); //access value of function
