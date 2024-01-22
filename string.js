var mystring = "I am "
// escaping literal quotes in strings
var string= "I am harinisha \"ECE STUDENT\" from ramanathapuram"
console.log(string)
//quoting strings with sigle quotes
var strin1='<a href="http://www.example.com" target="_balnk">LInk</a>'
console.log(strin1)
//concatenate strings with + operator
var string2="I come first."+"I come second."
var string3="I come first "
string3+="I come second."
console.log(string2)
console.log(string3)
//constructing strings with variables
var isstr ="hi " + string3 +"really?"
console.log(isstr)
//appending variables to strings
console.log(string2+=string3)
//finding length of the string
var firstnamelength=0
var firstname="harinisha"
firstnamelength = firstname.length
console.log(firstnamelength)
//bracket notation to find first character in string
var  firstletteroflastname=""
var lastname="harinisha"
firstletteroflastname=lastname[0]
console.log(firstletteroflastname)
//string immutability
var mystr="jello world"
mystr[0] ="H"
console.log(mystr)// cannot fix 
//bracket notation to find last character in string
var lastletteroffirstname=firstname[firstname.length-1]
console.log(lastletteroffirstname)
