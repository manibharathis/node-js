
const {x,xyzfunc}=require('./xyz.js')
const {Sum,Multiple } = require('./calculate')
const data = require("./data.json")
const util = require("node:util")
let a= 10;
let b= 20;
console.log(a+b);
console.log(x)
xyzfunc()
console.log(Sum)
Sum(2,3)
Multiple(2,2)
console.log(data)
