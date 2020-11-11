let a = [1,2,3,4,5,1,2,3,4];
console.log("Array with Duplicate: " + a);
let ans = [];

let duplicate = function(num){

        for(i=0;i<a.length;i++){
            if(ans.includes(a[i]))
            {
                //
            }
            else{
                ans.push(a[i]);
            }
        }
        console.log("Array without Duplicate: " + ans);

}
duplicate(a);