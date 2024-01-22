// example
function fun(a,b){
    console.log("function with argument and without argument:")
    for(i=a;i<b;i++){
        if(i%2==0){
            console.log("The number",i,"is even")
        }
        else{
            console.log("The number",i,"is odd")
        }
    }
}
fun(5,10)
// function with argument and with return type
function out(a,b){
    return a,b
}
console.log(out(2,4))
//function without argument and with return type
function out2(){
    var a = 10
    return a

}
console.log(out2())