//
module.exports=class Pet{
    
    get location(){
        return "Uganda";
    }

    get category(){
        return "Animal";
    }

    constructor(petName,petBreed){
        this.petName=petName;
        this.petBreed=petBreed
    }

    petDetails(){
        console.log("Pet Name is: "+this.petName+" & pet Breed is: "+this.petBreed);
    }
       
    
   
}

//this is super class