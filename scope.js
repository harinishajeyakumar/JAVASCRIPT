//scope -> accessibility of your variables
//types of scope 
//local scope
for(var i =0;i<5;i++)
{
    console.log(i+11)
}
console.log(i)
// block scope
var a = 10
console.log(a)
{
    let a = 5
    let b =5
    console.log(a)
    console.log(b)
}
console.log(a)
