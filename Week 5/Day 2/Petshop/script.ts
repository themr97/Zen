
type pets = "dog" | "cat" | "bird";


// Main Class Pet
class Pet {

    name: string;
    age: number;
    breed: string;
    color: string;
    history: string;
    location: string;
    type: string;

    constructor(name,age,breed,color,history,location,type){
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.color = color;
        this.history = history;
        this.location = location;
        this.type = type;
    }

}

// Petshop class
class Availability{
    pets:Pet[];

    constructor(pets=[]){
        this.pets=pets;
        
    }

    insert(pet:Pet){
        this.pets.push(pet);
    }

    available(){
        return this.pets;
    }

    remove(name:string){
        for(let i=0;i<this.pets.length;i++){
            if(this.pets[i].name==name){
                this.pets.splice(i,1)
            }
        }
    }

    count(){
        let dog=0,cat=0,bird=0;
        for(let i=0;i<this.pets.length;i++){
            if(this.pets[i].type == "Dog"){
                dog++;  
            }else if(this.pets[i].type == "Cat"){
                cat++;
            }else{
               bird++
            }
        }
        return {Dog:dog, Cat:cat, Bird:bird}
    }

     

}

// Request Class
class requestPet extends Availability {

    query: object[][]=[];
  
    constructor(){ 
        super();
    }
  
    storeEnquiry(enquery : object[]) { 
        this.query.push(enquery);
    }  
}


let Pet1 = new Pet("Shiro",6,"Pomerian","White","2 Owners","Mumbai","Dog");
let Pet2 = new Pet("Jimmy",2,"Lab","Brown","1 Owner","Delhi","Dog");
let Pet3 = new Pet("Maya",0,"Persian","White","New Born","Chennai","Cat");
let Pet4 = new Pet("Cookie",3,"Indian","Black","Nil","Mumbai","Cat");
let Pet5 = new Pet("Jacky",1,"Parot","Green","1 Owner","Delhi","Bird");
let Pet6 = new Pet("Peter",1,"Parot","Blue","2 Owners","Bangalore","Bird");
let petshop = new Availability()


petshop.insert(Pet1)
petshop.insert(Pet2)
petshop.insert(Pet3)
petshop.insert(Pet4)
petshop.insert(Pet5)
petshop.insert(Pet6)


console.log(petshop.available())
console.log(petshop.count())

let request = new requestPet();

request.storeEnquiry([{color: 'White', type : 'Dog'}]);

console.log(request.query);
