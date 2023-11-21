class Employee{
    id: number;
    name: string;
    salary: number;
   protected address: string;

   get empId():number{
       return this.id;
   }
    set empId(id:number){
      this.id = id;
    }

   static getEmployeeCount():number{
    return 100;
   }
    constructor(id:number, name:string, salary:number){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.address = "Chitwan";
    }
    getNameWithAddress():string{
        return `${this.name} lives in ${this.address}`
    }
}
let john = new Employee(1, "John", 10000);
let address = john.getNameWithAddress();
Employee.getEmployeeCount();
class Manager extends Employee {
  constructor(id: number, name: string, salary: number) {
    super(id, name, salary);
  }
  getNameWithAddress(): string {
    return `${this.name} lives in ${this.address}`;
  }
}
let manager = new Manager(1, "John", 10000);

console.log(john.id);