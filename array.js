

// let arr = [1,2,3, "Josh",4];
// let arr2 = new Array("Josh","Oluwakuse", "Spencer");
// let arr3 = new Array(12);
//
// console.log(arr3.length)
//
// Array.prototype.lol = function(){
//     for (let index = 0; index < this.length; index++){
//         this[index] = this[index].toUpperCase();
//     }
//     return this;
// };
// Array.prototype.lmao = "kiokiooooooookioohaha";
//
// console.log(arr)
// console.log(arr2.lol())
//
// let result = arr2.lol()
// result.push("Yemi")
// result.pop()
// result.shift()
// result.unshift("Kehinde")
// result.slice(0,3)
// let newResult = result.splice(1, 2, "SIMI", "KEHINDE")
// console.log(newResult);
// console.log(result)
//
// let badWords =  ["fuck", "fucking", "liar", "bullshit", "motherfucker", "bitch"]
// let Sentence = "I fucking love you bitch"
// let sentenceBreak = Sentence.split(" ")
// console.log(sentenceBreak)
//
// for (let i = 0; i < sentenceBreak.length; i++) {
//     if(badWords.includes(sentenceBreak[i])){
//         sentenceBreak[i] = sentenceBreak[i][0] + "*".repeat(sentenceBreak[i].length - 1)
//         + sentenceBreak[i][sentenceBreak[i].length - 1]
//     }
// }
//console.log(sentenceBreak)

// let vehicle = [["Car" , 2000],["Truck", 500],["Bike", 6500]]
// console.log(vehicle)
// vehicle.push(["Scooter", 1500])
// console.table(vehicle)
// vehicle[0].push(["Nissan", "Honda"])
// vehicle[1].push(["Ford"])
// vehicle[2].push(["Honda"])
// vehicle[3].push(["Null"])
//
//
// console.table(vehicle)

let dataTable = [[200, 50, 300, 5],[10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35] ]

let row = 0
let start = 0
let stop = 3

ans = ""
row > dataTable.length || row < 0? ans = "error":
    start > dataTable.length || start < 0? ans = "error":
        stop > dataTable.length|| start < 0? "error":
            ans = dataTable[row].slice(start, stop + 1)
console.log(ans)

let classRoom = {
    cohort10: {
        name: "Josh",
        total: 43,
        graduated: true
    },
    cohort14: {
        name: "Reg",
        total: 44,
        graduated: false
    },
    cohort12: {
        name: "Felix",
        total: 43,
        graduated: true
    }
}

for (i in classRoom){
    console.log(classRoom[i]);
    console.log(classRoom[i]["total"])
}

for (i of Object.keys(classRoom)){
    console.log(i);
}
for (i of Object.values(classRoom)){
    console.log(i);
}
for (i of Object.entries(classRoom)){
    console.log(classRoom[i].name);
}
console.table(classRoom)
