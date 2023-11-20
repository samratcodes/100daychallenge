let samrat='Samrat';
let samrat1: string = 'Samrat';
let newName=samrat.toUpperCase();
let age:number;
age=22;
let isTrue:boolean;
isTrue=true;
let stnum=parseInt('10');

let emplist: string[]=['Samrat','Sourav','Sourav'];
let empnum: Array<number>=[1,2,3,4];
let newnumb=empnum.map((x)=>x*2);
let nayanum=empnum.filter((x)=>x>2);

enum dot {Red,Green,Blue};
let c:dot=dot.Green;

let swapnumbs:[firstnumber:number,secondnumber:number]
function swap(a:number,b:number):[number,number]{
    return [b,a];
}

swapnumbs=swap(10,20);


console.log(swapnumbs,c,isTrue,age,samrat1, newName,emplist,empnum,newnumb,nayanum,empnum);