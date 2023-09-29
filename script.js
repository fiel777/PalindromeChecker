function isPalindrome(str) {


  if (typeof str == "string") {      
    const word = str.split("").reverse().join(""); 

    if (str == word) {        
      console.log("The given string: " + str + " is an example of a palindrome, the reverse value is: " + word);
    }
    else {
      console.log("The given string: " + str + " is not example of a palindrome ");
    }
  }
  else if (typeof str =='number')
  {
    console.log("The given value: " + str + " is not a string! the expected data type of the value is string");
  }

}
isPalindrome("racecar");
isPalindrome("holaaa");
isPalindrome(1);
