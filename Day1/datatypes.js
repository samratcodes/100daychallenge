"use strict";
let samrat = 'Samrat';
let samrat1 = 'Samrat';
let newName = samrat.toUpperCase();
let age;
age = 22;
let isTrue;
isTrue = true;
let stnum = parseInt('10');
let emplist = ['Samrat', 'Sourav', 'Sourav'];
let empnum = [1, 2, 3, 4];
let newnumb = empnum.map((x) => x * 2);
let nayanum = empnum.filter((x) => x > 2);
var dot;
(function (dot) {
    dot[dot["Red"] = 0] = "Red";
    dot[dot["Green"] = 1] = "Green";
    dot[dot["Blue"] = 2] = "Blue";
})(dot || (dot = {}));
;
let c = dot.Green;
let swapnumbs;
function swap(a, b) {
    return [b, a];
}
swapnumbs = swap(10, 20);
console.log(swapnumbs, c, isTrue, age, samrat1, newName, emplist, empnum, newnumb, nayanum, empnum);
