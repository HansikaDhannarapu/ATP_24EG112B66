//DAY 1 ASSIGNMENT 4
//small no in the array 
let marks=[90,78,65,98]
let small=marks[0]
for(let index=0;index<marks.length;index++){
    if(small>marks[index])
        small=marks[index]
    
}
console.log(`smallest element in array is ${small}`)
