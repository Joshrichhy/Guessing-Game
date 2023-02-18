// function add(a, b){
//     return a + b;
// }
//
// var jay = function add(a, b){
//     return a + b;
// }(5,7)
//
// //console.log(jay)
//
// function outer(){
//     var even = 2
//     function inner(number){
//         console.log("inner func:: ", number)
//     }
//     inner(even)
//     console.log("Outer func is here")
// }
//
// var add = color => ({"bala": color})
// //console.log(add("blue"))
//
// var add = color => {return {"bala": color}}
// //console.log(add("blue"))
//
// function me(){
//     console.log("I am the function")
// }
//
// function helloWorld(func){
//     console.log("I am in here")
//     func()
//     console.log("After the function")
// }
//
// helloWorld(me)

let arr = [10,30,40,12]
let multipliedArr = []
arr.forEach((value) => multipliedArr.push((value * 2)))
console.log(arr)
console.log(multipliedArr)

let newArray = arr.filter((value) => value > 30)
console.log(newArray)

let reducedArray = arr.reduce((prev, curr) => prev + curr)
console.log(reducedArray)

let newArray2 = multipliedArr.filter((value) => value > 30).reduce((prev, curr) => prev + curr)

console.log(newArray2)

export{newArray2

}