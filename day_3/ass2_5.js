//ASSIGNMENT 5: Bank Transaction Analyzer

//You are building a bank statement summary.

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


//    1. filter() all credit transactions
let f=transactions.filter((i)=>i.type==="credit")
console.log(f)
//    2. map() to extract only transaction amounts
let m=transactions.map((i)=>i.amount)
 console.log(m)
//3. reduce() tocalculate final account balance
let r=transactions.reduce((i,j)=>{
    if(j.type==="credit")
        return i+j.amount
    return i-j.amount
},0)
console.log(r)
//4. find() the first debit transaction
let fi=transactions.find((i)=>i.type==="debit")
console.log(fi)
//5. findIndex() of transaction with amount 10000
let fIndex=transactions.findIndex((i)=>i.amount===10000)
console.log(fIndex)
