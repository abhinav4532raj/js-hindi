 const name= "abhi"
 const title ="raj"
 //console.log(name  +   title   +   "mahaseth");
 console.log(`hello my name is ${name} and my title is ${title}`);

 // declaration of string by 2nd method
 const gamename = new String('abhi 4532 raj ')
 console.log(gamename[0]);
 console.log(gamename.__proto__);
 console.log(gamename.length);
 console.log(gamename.toUpperCase());
 console.log(gamename.charAt(2));
 console.log(gamename.indexOf('i'));
 const newString =gamename.substring(0,4)
 console.log(newString)
 const anotherString = gamename.slice(-8,4)
 console.log(anotherString);

 //trim function is used to remove the space 
 const newstringone="     abhi     "
 console.log(newstringone);
 console.log(newstringone.trim());


 //use to  change value of constant string
 const url= "https://abhi.com/abhi%20raj"
 console.log (url.replace('%20','_'))
 console.log(url.includes('write'));
 // 
 console.log(gamename.split(' '));