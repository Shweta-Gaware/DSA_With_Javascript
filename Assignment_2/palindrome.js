function palindrome(str){
 
let rev = "";

for (let i=str.length-1; i>=0; i--){
    // console.log( str[i]);

    rev = rev + str[i];
    console.log("reverse string is:", rev);
}
if(rev == str){
    return true;
    }else{
    return false;
    }
}

const str = palindrome("Shweta");
// const reverseStr = palindrom(str);
console.log("Shweta string is ", (str));
