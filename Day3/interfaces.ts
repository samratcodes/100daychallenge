interface Address{
    street: string;
    city: string;
    country: string;
    pincode: number;
}
let user: Address = { street: 'Ecr', city: 'Chennai', country: 'India', pincode: 600119 };

interface User extends Address{
    name: string;
    age: number;
    address: Address;
}
let employee: User = { name: 'John', age: 40, address: user, street: 'Ecr', city: 'Chennai', country: 'India', pincode: 600119 };



let[user1,user2]: User[] = [
    {name: 'John', age: 40, address: user, street: 'Ecr', city: 'Chennai', country: 'India', pincode: 600119 },
    {name: 'John', age: 40, address: user, street: 'Ecr', city: 'Chennai', country: 'India', pincode: 600119 },
];
console.log(user1);