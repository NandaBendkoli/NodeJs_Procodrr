/*
// import sum and product from 01Module.export.js
const {sum,product} = require("./02.commonJs.js");

// require is an function it have an argument which is always a valid file path
// require is load 02.commonJs.js and execute it first then it execute index.js
// and a require is a function then it have some return value also the value is module.exports object

// 

console.log("running index.js")
console.log(sum(1,2,3,4,5));
console.log(product(4,5));

/*
running common.js --> this line coming from02.commonJs.js
running index.js --> this line coming from index.js
15 sum from 02.commonJs.js
20 product from 02.commonJs.js
 */

// --------------------------------------------------------------------------------------------------------

// es6 module //using export and import

import { sum } from "./03.moduleJs.js";
import { product } from "./03.moduleJs.js";
// import {sum,product} from "./03.moduleJs.js";

console.log(sum(4,5));
console.log(product(4,5));
