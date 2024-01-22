//set -> collection of unique data/values
setExample = new Set(["notta","aiadmk","bjp"])
console.log(setExample)
setExample.add("dmk")
setExample.add("congress")
console.log(setExample)
//map
map = new Map([["Mern-M","Mango db"],["Mern-E","express"],["Mern-b","React"]])
console.log(map)
//for in
for (key in map){
    console.log(map(key))
}
//for of
for (key of map){
    console.log(key)
}
//for each
map.forEach(key=>{
    console.log(key)
})
map.set("mmmm","fff")
console.log(map)

