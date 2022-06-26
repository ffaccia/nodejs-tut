
const _ = require("lodash")

var arr=[];
const arr1 = [6,[0, 1, 2, [3, 4]]];
const arr2 = arr1

//#ar_loop flatten array
ar_loop = (ar) => {
    console.log(ar);
    ar.forEach((el) => {
        if(Array.isArray(el))
          ar_loop(el)
        else
          arr.push(el)
    });
};

if (Array.isArray(arr1))
  ar_loop(arr1)

arr1.push('cazzo')  
console.log(arr)
console.log(arr2)

console.log("fra")
console.log(_.flattenDeep(arr1))

