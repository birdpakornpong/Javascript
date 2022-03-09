// Math.random
let mathRandom = Math.random()  // สุ่มตัวเลข 0.0 - 0.9

//  Math.floor 
let mathRandomLength = mathRandom * 8
let mathFloor = Math.floor(mathRandomLength) // ปัดทษนิยม

/***
** Random Value Array
***/
const fruits = ["mango", "strawberry", "grape", "longan", "rambutan", "tamarind"]
let randomFruits = fruits[Math.floor(Math.random() * fruits.length)]

/***
** Empty An Array
***/
fruits.length = 0 

/***
** Round Number To Point
***/
let pi = 3.1415926535
pi = pi.toFixed(2)


/***
** Filter False From Array 
***/
const array = [0, 1, 2, '', 5, true, false ]
array.filter(Boolean)
console.log('array', array.filter(Boolean)) // true ไม่หายได้ array [ 1, 2, 5, true ]

/***
** Get Unique Values From Array
***/
const fruitsDuplicate = ["mango", "strawberry", "grape", "longan", "rambutan", "grape", "longan", "rambutan", "tamarind", "tamarind", "rambutan", "longan", "grape", "strawberry"]
let uniqueFruits = [...new Set(fruitsDuplicate)] // cut duplicate value

/***
** Sort Array
***/
let englishs = ["grape", "tamarind","longan", "rambutan", "empty", "execution", "duplicate", "unigue"]
englishs.sort()

let score = [99, 100, 75, 80]
score.sort((a,b) => a - b)

let users = [
    { 
        name: "bird",
        score: 80
    },
    { 
        name: "pang",
        score: 95
    },
    { 
        name: "pakornpong",
        score: 75
    }
]
users.sort((a,b) => a.score - b.score)

/***
** Reverse String
***/
function reverseString(string) {
    return string.split("").reverse().join("")
}

/***
** For Loop
***/
let vocabulary = ["grape", "tamarind", "rambutan", "longan", "empty", "unigue", "duplicate", "execution", "vocabulary"]
for (let vocab of vocabulary) {
    console.log('vocab = ', vocab)
}

/***
** Get Current Time
***/
let date = new Date()
let timeNow = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

/***
** Run Promise In Parallel
***/
function getOne() {
    console.log('1')
    return 1
}
async function getTwo() {
    console.log('2')
    return 2
}
function getThree() {
    console.log('3')
    return 3
}
function showResult(one,two,three) {
    console.log(`${one}, ${two}, ${three}`)
}
async function awaitFunction() {
    const one = await getOne()
    const two = await getTwo()
    const three = await getThree()
    const result = await showResult(one,two,three)

}
// awaitFunction()

async function promiseAll() {
    const [one, two, three] = await Promise.all([
        getOne(),
        getTwo(),
        getThree()
    ])
    console.log(`Promise ${one}, ${two}, ${three}`)
}
// promiseAll()

