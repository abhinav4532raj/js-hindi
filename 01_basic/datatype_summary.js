//primitive
//7type: string :number:boolean:null:undefine:symbol:bigint:
const id=symbol('123')
const anotherid= symbol('123')
console.log(id=== anotherid);

// reference type (non premitive)
// array:objects:functions
const heros=["abc","asdf","aman"];//array
 let myobj={
    name:"abhi",
    age: 12,

}//obj

const myfunction=function(){
    console.log("helloworld");
}
