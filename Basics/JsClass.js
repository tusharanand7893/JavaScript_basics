//creating class with constructor and variables
module.exports=class Person{

    
    get age(){
        return 25;
    }

    get location(){
        return "Pune";
    }

   get fullname(){
    return this.firstName+" "+this.lastName;
   }

    constructor(firstName,lastName){
        this.firstName= firstName; //instanse variables and properties
        this.lastName=lastName;
    }

    //methods
    fullnamefunction(){
        console.log(this.firstName+" "+this.lastName);
    }

}

//creating object of class and accessing value and functions

//let person= new Person("Tushar","Anand");
//console.log(person.fullname);
//console.log(person.location);
//console.log(person.age);
//console.log(person.fullnamefunction());

//-------------------// commented all this as we have exported this class and we will using these value in another file