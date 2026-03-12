//Assignment 3: Student Marks List
//Scenario : You receive marks from an exam system.
const marks = [78, 92, 35, 88, 40, 67];
//    1. filter() marks ≥ 40 (pass marks)
let f=marks.filter((i)=>i>=40)
console.log(f)
//    2. map() to add 5 grace marks to each student
let m=marks.map((i)=>i+5)
console.log(m)
//    3. reduce() to find highest mark
let r=marks.reduce((i,j)=>{
    if(i>j)
        return i
    else
         return j
})
console.log(r)
//    4. find() first mark below 40
let fi=marks.find((i)=>i<40)
console.log(fi)
//    5. findIndex() of mark 92
let fIndex=marks.findIndex((i)=>i===92)
console.log(fIndex)
