// Chunk function
var chunk = function (arr, k) {
    var outarr = []; // to store the return arr
    for (var i = 0; i < arr.length; i += k) {
        outarr.push(arr.slice(i, i + k));
    }
    return outarr;
};
// Reduce function
var reduce = function (arr, reducer, initialValue) {
    var accumulator = initialValue;
    for (var i = 0; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i], i, arr);
    }
    return accumulator;
};
// Find Function 
var find = function (arr, con) {
    for (var i = 0; i < arr.length; i++) {
        if (con(arr[i]) == true) {
            return arr[i];
        }
    }
};
// Sum Function
var sum = function (arr) {
    var ans = 0;
    for (var i = 0; i < arr.length; i++) {
        ans = arr[i] + ans;
    }
    return ans;
};
