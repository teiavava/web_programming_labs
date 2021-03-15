const sum_array = require('./sum.js');

function filter_array(vec, parNum) {
    filtered = vec.filter(function (el) {
        return el % 2 == parNum % 2
    })
    return sum_array.sum_array(filtered)
}

// console.log(filter_array([1, 2, 3, 4], 2))


module.exports = {
    filter_array
}