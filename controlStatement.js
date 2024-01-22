//looping
//for loop
/*sum = 0
for (var i=0;i < 10;i++){
    sum +=i
}
console.log(sum)

//while
i = 0
while(i < 10);{
    sum1 += i
    i++
}
console.log(sum1)
//do..while
i = 0
do{
    sum += i
    i++
}
while(i<10);
console.log(sum)
//example 1
arr = [10,20,30]//valid
console,log(arr.length)
for (var i = 0; i < arr.length;i++){
    console.log(arr[i])
}
//example2
arr = [10,20,20.5]//valid
console,log(arr.length)
for (var i = 0; i < arr.length;i++){
    console.log(arr[i])
}
//example 3
arr = [10,20,true,false]//valid
console,log(arr.length)
for (var i = 0; i < arr.length;i++){
    console.log(arr[i])
}
//example 4
arr = [10,20,"string",true,"kongu"]//valid
console.log(arr.length)
for (var i = 0; i < arr.length;i++){
    console.log(arr[i])
}

//for in loop ->works based on index
arr = [10,20,"string",true,"kongu"]
for(const index in arr){
    console.log("the value present in ",index ,"is",arr[index])
}*/
//for of-> it is used to access the elements directly
arr = [10,20,"string",true,"kongu"]
for (const value of arr){
    console.log(value)
}

//for each loop
arr = [10,20,"string",true,"kongu"]
arr.forEach(value=>{
    console.log(value)
})
