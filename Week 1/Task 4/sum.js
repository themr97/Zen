let sum = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    console.log("Sum of array is " + arr.reduce((a,b)=>a+b));
}

sum();