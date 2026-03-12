//DAY 1 ASSIGNMENT 7
//searching key element using fxn
let search=function (arr,key){
    let r
 for(let i=0;i<arr.length;i++)
    if(arr[i]==key)
      r='found'  
    else 
        r='not found'
    return r
}
let a=[16,17,18,19,20]
let result=s(a,10)
console.log(result)