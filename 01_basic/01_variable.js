const accountID=144553
let accountEmail="abhinav@gmail.com"
var accountPassword="123545"
accountCity="jaipur"
let accountState;

//accountID = 2 not allowed
accountEmail="abcd@.com"
accountPassword="212123"
accountCity="bihar"

console.log(accountID);
/*
prefer not to use var
 bcz of issue in block scope 
and fuctional scope
*/

console.table([accountID,accountEmail,accountCity,accountPassword,accountState])