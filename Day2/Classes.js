"use strict";
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.address = "Chitwan";
    }
    getNameWithAddress() {
        return `${this.name} lives in ${this.address}`;
    }
}
let john = new Employee(1, "John", 10000);
let address = john.getNameWithAddress();
class Manager extends Employee {
    constructor(id, name, salary) {
        super(id, name, salary);
    }
    getNameWithAddress() {
        return `${this.name} lives in ${this.address}`;
    }
}
let manager = new Manager(1, "John", 10000);
console.log(john.id);
