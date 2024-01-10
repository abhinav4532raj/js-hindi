const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

//marvel_heros.push(dc);
//console.log(marvel_heros);

//combining two arrays 1st method
const allheros=marvel_heros.concat(dc)
console.log(allheros);



// combining two arrays in 2nd method
const alln_heros=[...marvel_heros,...dc]
console.log(alln_heros);


const another_array=[1,2,3,[4,5,6],7,[6,7[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)