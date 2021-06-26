// palindrome check
// racecar -> racecar 
// eye -> eye 


// string -> reverse
// reversed string === string (palindrome)



function palindromeCheck(str) {
    var splitStr = str.split("")
    var reverseStr = splitStr.reverse()
    var finalStr = reverseStr.join("")
   


   str === finalStr ? `${console.log("it is a palindrome")}`:`${console.log("it is not a palindrome")}` 
}


palindromeCheck("eye")