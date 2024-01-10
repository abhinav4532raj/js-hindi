//array
const myarr=[0,2,4,5,7,8]// mix of diiferent data type
console.log(myarr[3]);
//2nd method
const myarr2=new Array(1,2,3,4)
console.log(myarr2[2]);



//method inside array
myarr.push(6)
myarr.push(7)
myarr.pop()
console.log(myarr);

myarr.unshift(9)// add element in starting
myarr.shift()
console.log(myarr);
console.log(myarr.includes(2));
console.log(myarr.indexOf(5));

// change array  data in string
const newarr=myarr.join()
console.log(typeof newarr);

// slice,splice

console.log("a",myarr);


const myn1= myarr.slice(2,6)// include element 2-5
console.log(myn1);
console.log("b",myarr);

const myn2= myarr.splice(1,3)//include 1-3
console.log("c",myarr);//remove from array element of slice
console.log(myn2);

