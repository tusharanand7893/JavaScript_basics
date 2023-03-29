//class we want to import first we need to make that class exportable "module.exports"

const Person=require('./JsClass'); //imported this class

let person= new Person("Game", "of Throwns");
console.log(person.fullname);
console.log(person.location);
console.log(person.age);
console.log(person.fullnamefunction());

