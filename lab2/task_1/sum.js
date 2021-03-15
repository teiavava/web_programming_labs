function sum_array(arr) {
    const reducer = (acc, val) => acc + val;
    return arr.reduce(reducer)
}

module.exports = {
    sum_array
}