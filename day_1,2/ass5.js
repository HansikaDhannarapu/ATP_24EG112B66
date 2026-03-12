//DAY 1 ASSIGNMENT 5
//finding the big no. using fxn
let big=function (a,b,c){
    let d
    if(a>b&&a>c)
    d=a
else if(b>a&&b>c)
    d=b
else if(c>a&&c>b)
    d=c
return d
}
let result=big(1,2,0)
console.log(result)