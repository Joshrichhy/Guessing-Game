let prompt = require("prompt-sync")()
var age = prompt("hOW OLD ARE YOU: ")
console.log(age)

let righttOperand = 50
let leftOperand = 5
let operator = "/"
let ans = 0

operator === "+"? ans = righttOperand + leftOperand :
    operator === "-"? ans = righttOperand - leftOperand :
        operator === "*"? ans = righttOperand * leftOperand :
            operator === "/"? ans = righttOperand / leftOperand :
                operator === "%"? ans = righttOperand % leftOperand :
                    console.log("No Operator found")

console.log(ans)

