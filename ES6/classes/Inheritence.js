class Vehicle {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
}

class Car extends Vehicle {
    constructor(name) {
        super(name, "cars");
    }
    getName() {
        return "Its a Car : " + super.getName();
    }
}

let car = new Car('Audi');
console.log(car.getName());
console.log(car.getType());







