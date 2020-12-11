var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Main Class Pet
var Pet = /** @class */ (function () {
    function Pet(name, age, breed, color, history, location, type) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.color = color;
        this.history = history;
        this.location = location;
        this.type = type;
    }
    return Pet;
}());
// Petshop class
var Availability = /** @class */ (function () {
    function Availability(pets) {
        if (pets === void 0) { pets = []; }
        this.pets = pets;
    }
    Availability.prototype.insert = function (pet) {
        this.pets.push(pet);
    };
    Availability.prototype.available = function () {
        return this.pets;
    };
    Availability.prototype.remove = function (name) {
        for (var i = 0; i < this.pets.length; i++) {
            if (this.pets[i].name == name) {
                this.pets.splice(i, 1);
            }
        }
    };
    Availability.prototype.count = function () {
        var dog = 0, cat = 0, bird = 0;
        for (var i = 0; i < this.pets.length; i++) {
            if (this.pets[i].type == "Dog") {
                dog++;
            }
            else if (this.pets[i].type == "Cat") {
                cat++;
            }
            else {
                bird++;
            }
        }
        return { Dog: dog, Cat: cat, Bird: bird };
    };
    return Availability;
}());
// Request Class
var requestPet = /** @class */ (function (_super) {
    __extends(requestPet, _super);
    function requestPet() {
        var _this = _super.call(this) || this;
        _this.query = [];
        return _this;
    }
    requestPet.prototype.storeEnquiry = function (enquery) {
        this.query.push(enquery);
    };
    return requestPet;
}(Availability));
var Pet1 = new Pet("Shiro", 6, "Pomerian", "White", "2 Owners", "Mumbai", "Dog");
var Pet2 = new Pet("Jimmy", 2, "Lab", "Brown", "1 Owner", "Delhi", "Dog");
var Pet3 = new Pet("Maya", 0, "Persian", "White", "New Born", "Chennai", "Cat");
var Pet4 = new Pet("Cookie", 3, "Indian", "Black", "Nil", "Mumbai", "Cat");
var Pet5 = new Pet("Jacky", 1, "Parot", "Green", "1 Owner", "Delhi", "Bird");
var Pet6 = new Pet("Peter", 1, "Parot", "Blue", "2 Owners", "Bangalore", "Bird");
var petshop = new Availability();
petshop.insert(Pet1);
petshop.insert(Pet2);
petshop.insert(Pet3);
petshop.insert(Pet4);
petshop.insert(Pet5);
petshop.insert(Pet6);
console.log(petshop.available());
console.log(petshop.count());
var request = new requestPet();
request.storeEnquiry([{ color: 'White', type: 'Dog' }]);
console.log(request.query);
