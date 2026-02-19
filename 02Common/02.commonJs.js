
console.log("running common.js")
function sum(...num) {
    return num.reduce((curr, acc) => curr + acc)
}

function product(...num) {
    return num.reduce((curr, acc) => curr * acc)
}

module.exports = { sum, product };
