// DAY 2 ASSIGNMENT
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
console.log(employees)
//1. Insert new Emp at 2nd position

employees.splice(1,0,{eno:100,name:'honey',marks:[90,98,99]})
console.log(employees)

//2. Remove an emp with name "Kiran"

let i;
for(let emp in employees){
    if(employees[emp].name=="Kiran")
        i=emp;
}
employees.splice(i,1)
console.log(employees)


// 3.Change the last mark 95 to 75 of emp  "Sneha"
for(let e of employees){
    if(e.name=="Sneha"){
       for(let k  in e.marks){
        if(e.marks[k]==95)
          e.marks[k]=75;
      }
    }
}

console.log(employees)


