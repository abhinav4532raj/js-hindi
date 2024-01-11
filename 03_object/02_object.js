const tinderuser ={}

 
tinderuser.id="123abs"
tinderuser.name="sammy"
tinderuser.isloggedin=false

console.log(tinderuser);
//



const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"abhi",
            lastname:"raj"
        }
    }
}
console.log(regularuser.fullname);
console.log(Object.keys(regularuser));
console.log(Object.values(regularuser));