// ASSIGNMENT 2: Student Performance Dashboard
                 //You are working on a college result analysis system.
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//    1. filter() students who passed (marks ≥ 40)
let f=students.filter((i)=>i.marks>=40)
console.log(f)
/*    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D
*/
let m = students.map((i) => {
    if(i.marks >= 90)
        return { ...i, grade: 'A' }
    else if(i.marks >= 75)
        return { ...i, grade: 'B' }
    else if(i.marks >= 60)
        return { ...i, grade: 'C' }
    else 
        return { ...i, grade: 'D' }
})
console.log(m)
//   3. reduce() to calculate average marks
let r=students.reduce((i,j)=>i+j.marks,0)/students.length
console.log(r)
//   4. find() the student who scored 92
let fi=students.find((i)=>i.marks===92)
console.log(fi)
//   5. findIndex() of student "Kiran"
let fIndex=students.findIndex((i)=>i.name==="Kiran")
console.log(fIndex)