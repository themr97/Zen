// Print odd numbers in an array

let odd = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (num of arr){	
        if (num % 2 === 1) {
            console.log(num);
        }
    }
}

odd();

