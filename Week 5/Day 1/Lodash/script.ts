// Chunk function

let chunk  =  (arr:[],k:number) => {
    let outarr = [] // to store the return arr
    for(let i=0;i<arr.length;i+=k){
        outarr.push(arr.slice(i,i+k))
    }
    return outarr
  }

// Reduce function

let reduce = (arr, reducer, initialValue) => {    
  let accumulator = initialValue;
  for(let i=0;i<arr.length;i++){      
   accumulator = reducer(accumulator, arr[i], i, arr);    
  }
  return accumulator;
}


// Find Function 

let find = (arr,con) => {
    for(let i=0;i<arr.length;i++){
      if(con(arr[i])==true){
        return arr[i]
      }
    }
  }

  // Sum Function

  let sum = (arr) => {
      let ans = 0;
      for(let i=0;i<arr.length;i++){
            ans = arr[i]+ans;
      }
      return ans;
  }