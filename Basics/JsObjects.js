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