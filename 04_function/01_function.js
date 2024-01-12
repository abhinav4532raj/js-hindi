function saymyname(){
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("i");
}

saymyname()//if we not put bracket on calling time it dont give error but dont show result. it  is an reference .
/*
function addtwonumbers(n1, n2){
    console.log(n1+n2);

}
addtwonumbers(3,2)
const result =addtwonumbers(3,4);
console.log("result",result);
*/
function addtwonumbers(n1, n2){
    let result= n1+n2
    console.log("abhi");
    return result

}

const result =addtwonumbers(3,4);
console.log("result",result);



function loginusermessage(username="sam")//pass value in start not show undefine if we not pass value
{
    if (username===undefined)
     {
        console.log("please enter a user name");
        return
    }
    return`${username} just logged in`
}
//loginusermessage("abhi")// no result show just because in function we return value not tell function to print
//console.log(loginusermessage("abhi"));
//console.log(loginusermessage());



function calculatecartprice(...num1) //(...)rest operator to pass  more value 
{
    return num1
}
console.log(calculatecartprice(200,400,500,600));


const user={
    username: "abhi",
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleobject(user)
handleobject({
    username: "sammy",
    price: 399
})
