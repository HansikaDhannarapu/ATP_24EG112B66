//DAY 1 ASSIGNMENT 6
//finding the sum of array using fnx
let sum=function (arr){
    let sum=0
    for(let index=0;index<arr.length;index++){
    sum=sum+arr[index]  
   }
   return sum
}
let a=[16,17,18,19,20]
let result=sum(a)
console.log(result)
