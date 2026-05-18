/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.
*/
//Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];
 //   1. filter() courses with name length > 5
 let f=courses.filter(i=>
 {
    if(i.length>5)
        return i
 })
console.log('Courses with name length >5:',f)
//   2. map() to convert course names to uppercase
let m=courses.map(i=>i.toUpperCase(i))
console.log(m)    
/*3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
*/
let r=courses.reduce((i,j,k)=>(i+(k===0?'':'|')+j).toUpperCase())
console.log(r)

  //  4. find() the course "react"
let fi=courses.find(i=>i==='react')
console.log(fi)
//    5. findIndex() of "node"
let fIndex=courses.findIndex(i=>i==='node')
console.log(fIndex)
