//object can be declare by literals, constructor
//singleton when we make using constructor the this form


//object literals

const mysym=Symbol("key1")



const jsuser={
    name:"abhinav",
    "fullname":"abhinav raj",
    [mysym]:"mykey1",
    age:20,
    location:"bihar",
    email:"abhi@gmail.com",
    isloggedin:false,
    lastlogin:["mon","sat"]
}//object
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["fullname"]);
//console.log(jsuser.mysym,typeof mysym);
console.log(jsuser[mysym],typeof [mysym]);
