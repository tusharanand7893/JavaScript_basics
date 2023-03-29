
const Pet=require('./InheritanceClassA');

class Dog extends Pet{

    constructor(petName, petBreed){
        super(petName,petBreed);
    }

    //override function
    get category(){
        return "Dog";
    }
}

let dog= new Dog("Bruno","Saint Berand");
dog.petDetails();
console.log(dog.category);