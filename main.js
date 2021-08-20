// 1.
// var string = prompt("enter a string");
// function printString(longString){
//     for(let i = 0; i < string.length; i++){
//         if(string.length > 5){
//             return "long";
//         }
//         return "short";
//     }
// }
// var length = printString(string);
// console.log(length);

// 2.
// var string = prompt("enter a string");
// function findALatter(string){
//     for(let i = 0; i <string.length; i++){
//           if(string[i] == 'a'){
//         console.log(i);
//     }   
//     }
//     return false;
// };
// findALatter(string);

// 3.
// var string = prompt("enter a string");
// function findALatter(string){
//     for(let i = 0; i <string.length; i++)
//     if(string[i] == 'r'){
//         return true;
//     }  
//     return false;
// };

// 4.
// var string = prompt("enter a string");
// var char = prompt("enter a char");
// function findALatter(string){
//     for(let i = 0; i <string.length; i++)
//     if(string[i] == char){
//         return true;
//     }  
//     return false;
// };

// 5.
// var string = prompt("enter a string");
// var char = prompt("enter a char");
// function findALatter(string){
//     for(let i = 0; i <string.length; i++){
//         if(string[i] == char){
//         console.log(string.lastIndexOf(char));   
//     }   
//     }
//     return false;
// };
// findALatter(string);

// 6.
// let str = "sayonara";
// function return3Char(string){
//     console.log(str.substring(0, 3));
// }
// return3Char(str);

// 7.
// let str = "sayonara";
// function return4Char(string){
//     console.log(str.substring(3, 7));
// }
// return4Char(str);

// 8.
// let str = "sayonara";
// function returnAllCharFromeO(string){
//     console.log(str.substring(4, 8));
// }
// returnAllCharFromeO(str);

// 9.
// let str = prompt("enter a string");
// let userNumber = Number(prompt("enter first number"));
//     function StringByNumber(string){
//         if(userNumber > str.length){
//             console.log("index to muche big");
//         }
//     console.log(str.substring(userNumber));
// }
// StringByNumber(str);

// 10.
// let str = prompt("enter a string");
// let userNumber = Number(prompt("enter first number"));
//     function StringByNumber(string){
//         if(userNumber > str.length){
//             console.log("index to muche big");
//         }
//     console.log(str.substring(userNumber, 3));
// }
// StringByNumber(str);

// 11.
// let str = prompt("enter a string");
// let firstNumber = Number(prompt("enter first number"));
// let lastNumber = Number(prompt("enter last number"));
//     function StringByNumber(string){
//     console.log(str.substring(firstNumber, lastNumber));
// }
// StringByNumber(str);

// 12.
// let str = "sayonara";
// function return3Char(string){
//     console.log(str.substring(0, 3));
// }
// return3Char(str);

// 13.
// let str = "sayonara";
// function return4Char(string){
//     console.log(str.substring(3, 7));
// }
// return4Char(str);

// 14.
// let str = "sayonara";
// function returnAllCharFromeO(string){
//     console.log(str.substring(4, 8));
// }
// returnAllCharFromeO(str);

// 15.
// var fullName = prompt("enter a full name");
// function getLengthString(fullNameCheck){
//     return fullNameCheck.length;
// }

// function isSpace(fullNameCheck){
//     if(fullNameCheck.indexOf(" ")>-1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function printFirstHalf(fullNameCheck){
//     var spaceIndex = fullNameCheck.indexOf(" ");
//     var firstHalf = fullNameCheck.substring(0, spaceIndex);
//     console.log(firstHalf);
// }
// printFirstHalf(fullName);

// function printSictHalf(fullNameCheck){
//     var spaceIndex = fullNameCheck.indexOf(" ");
//     var sectHalf = fullNameCheck.substring(spaceIndex, 0);
//     console.log(sectHalf);
// }
// printSictHalf(sectHalf)

// var strLength = getLengthString(fullName);
// var isSpaceInStr = isSpace(fullName);
// console.log(strLength, isSpaceInStr);

// 16.
// let firstString = prompt("enter a first string");
// let secondString = prompt("enetr a second string");
// firstString=firstString.toLowerCase();
// secondString=secondString.toLowerCase();
// function printString(first, last){
//     if(first == last){
//         return true;
//     };
//     return false;
// };
// console.log(printString(firstString, secondString));

// 17.
// let firstString = prompt("enter a first string");
// let secondString = prompt("enetr a second string");
// firstString=firstString.toUpperCase();
// secondString=secondString.toUpperCase();
// function printString(first, last){
//     if(first == last){
//         return true;
//     };
//     return false;
// };
// console.log(printString(firstString, secondString));

// 18.
// let firstName = prompt("enter first name");
// let lastName = prompt("enter last name");
// function printLong(first,last){
//     if(first.length>last.length){
//         return first;
//     }
//     return last;
//     }
// let result = printLong(firstName,lastName);
// console.log(result);

// 19.
// let firstName = prompt("enter first name");
// let lastName = prompt("enter last name");
// function printA(first){
//     if(first.indexOf("a")>-1){
//         return true
//     }
//     return false
// }
// let result = printA(firstName)
// console.log(result);
// function printApi(last){
//     if(last.indexOf("api")>-1){
//         return true
//     }
//     return false
// }
// let result1 = printApi(lastName)
// console.log(result1);

// 20.
// let str = prompt("enter string");
// function printLong(string){
//     if(string.length>5){
//         return ("long");
//     }
//     return ("short");
//     }
// let result = printLong(str);
// console.log(result);

// 21.
// let state = prompt("enter country");
// function printLong(string){
//     if(string.length<3){
//         return ("yes");
//     }
//     return ("no");
//     }
// let result = printLong(state);
// console.log(result);

// 22.
// let str = prompt("enter string");
// let char = prompt("enter char")
// function printStrChar(string,character){
//     if(string.length>6){
//         return string
//     }
//     return string.indexOf(character)
//     }
// let result = printStrChar(str);
// console.log(result);

// 23.
// var theString = prompt("enter a string");
// var theLetter = prompt("enetr a letter");
// function printStringAndLetter(string, letter){
//     var caunt = 0;
//     for(let i = 0; i < theString.length; i++){
//         if(theString[i] == theLetter){
//             caunt++;
//         }
//     }
//     if(caunt){
//     return theString.indexOf(theLetter);
//     }
//     return theString;
// }
// var all = printStringAndLetter(theString, theLetter);
// console.log(all);

// 24.
// var firstName = prompt("enter a first name");
// var lastName = prompt("enetr a last name");
// function printFullName(fullNameCheck){
//     return firstName[0] + '. ' + lastName.toUpperCase();  
// }
// var all = printFullName(firstName, lastName);
// console.log(all);

// 25.
// var firstLastName = prompt("enter a first last name");
// var secondlastName = prompt("enetr a second last מame");
// function printFullName(fullNameCheck){
//     if(firstLastName.length > secondlastName.length){
//         console.log( secondlastName.toLowerCase());
//         return firstLastName;
//     }
//     if(firstLastName.length < secondlastName.length){
//         console.log(firstLastName.toLowerCase());
//         return secondlastName;
//     }
// }
// var all = printFullName(firstLastName, secondlastName);
// console.log(all);

// 26.
// var theName = prompt("enter a name");
// var theLetter = prompt("enetr a letter");
// function printStringAndLetter(name, letter){
//     var caunt = 0;
//     for(let i = 0; i < theName.length; i++){
//         if(theName[i] == theLetter){
//             caunt++;
//         }
//     }
//     if(caunt){
//     return theName;
//     }
//     return false;
// }
// var all = printStringAndLetter(theName, theLetter);
// console.log(all);