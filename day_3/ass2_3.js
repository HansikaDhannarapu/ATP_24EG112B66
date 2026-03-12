//ASSIGNMENT 3:Employee Payroll Processor
//  You are building a salary processing module in a company HR app.

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//    1. filter() employees from IT department
let f=employees.filter((i)=>i.department==="IT")
console.log(f)
//2. map() to add:
   //         netSalary = salary + 10% bonus
let m=employees.map((i)=>({...i,netsalary:i.salary+(0.1*i.salary)}))
console.log(m)
//    3. reduce() to calculate total salary payout
let r=employees.reduce((i,j)=>i+j.salary,0)
console.log(r)
//    4. find() employee with salary 30000
let fi=employees.find((i)=>i.salary===30000)
console.log(fi)
//    5. findIndex() of employee "Neha"
let fIndex=employees.findIndex((i)=>i.name==="Neha")
console.log(fIndex)
