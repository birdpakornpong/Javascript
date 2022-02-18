// Promise
function getValue(age) {
    return Promise.resolve(`Hello I am Pakornpong age ${age} year old`); // Promise.resolve แก้ไข ไม่ return promise ทำให้ error ".then is not a function"
}

function promiseFunction(number) {
    getValue(number)
    .then(result => {
        console.log('result', result)
        return `bird`
    })
    .then(response => console.log("response",response))
    .catch(err => {
        console.log('err',err)
    })
    // ไม่สามารถ .then หลัง catch ได้
}

promiseFunction(25)

// Async Await

async function asyncFunction(number) {
    try {
        const data = await getValue(number)
        console.log('data', data)
    } catch(err) {
        console.log('err', err)
    }

    try {
        const data = await getValue(number)
        console.log('data2', data)
    } catch(err) {
        console.log('err', err)
    }
  
}

asyncFunction(26)