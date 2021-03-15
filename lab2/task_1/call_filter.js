const filter_array = require('./filter.js');

arr = []

for (var i = 0; i < 100; i++) {
    arr[i] = i;
}

console.log(filter_array.filter_array(arr, 6))
console.log(filter_array.filter_array(arr, 5))
