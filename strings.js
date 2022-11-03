
// // string reverse 
const str ="hello josh hawayu "
const newStr = str.split('');
console.log(newStr.reverse().join(''));



// loops 
function reverseString(string){
    let result = newString();
    while (string.length!==""){
        result+=string.split('').slice(0,4).reverse().jion('');
        string=string.slice(4);
    }
   return result;
}
console.log(reverseString("temp"));


// recursion 
function stringrecursion(string){
    if (string==""){
        return""
   }
   return string.split('').slice(0,4).reverse().join('')+stringrecursion(string.slice(4));
}
console.log();


