function add(a: number, b: number,c?:number): number {
    return c? a + b+c:a+b ;
}
console.log(add(10, 20,40));
const add1 = (a: number, b: number): number => {
    return a + b
}