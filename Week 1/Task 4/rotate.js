let a1 = [1,2,3,4,5];
console.log("Without rotate " + a1);

let rotate = function (item, k){
    for (let i = 0; i < k; i++) {
        item.unshift(item.pop()) 
    }
    return item;
}

console.log("With Rotate of 2 : " +  rotate(a1, 2));