function one ()
{
    const username="abhi"
    function two()
    {
        const website="youtube"
        console.log(username);// it can be bcz it is inside the first funstion it inherit the property of father
    }
    //console.log(website);// error bcz it cant be accesed out of the function
    two()
}
one()


//**************************interesting***************** */
console.log(addone(5));// we call above or below function direct;y
function addone(num){
    return num+1
}
const addtwo =function(num){
    return num +2
}
console.log(addtwo(5)); //in this case we cant we can onl call below the function in this we store functon in a variable 
