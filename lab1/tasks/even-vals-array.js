var arr = [];
var len = 100;

for (var i = 0; i < len; i++) {
    arr[i] = i;
}

for (var i = 0; i < len; i++) {
    if (arr[i] % 2 == 0)
    console.log(arr[i])
}

// or

var filtered = arr.filter(function(element, array) {
    return (element % 2 === 0);
  });

  console.log(filtered);
