//Assignment 1: Daily Temperature Analyzer
//Scenario : You are analyzing daily temperatures recorded by a weather app.

const temperatures = [32, 35, 28, 40, 38, 30, 42];
//     1. filter() temperatures above 35
let f =temperatures.filter((i)=>i>35)
console.log(f)
//    2. map() to convert all temperatures from Celsius → Fahrenheit
let m=temperatures.map(i=>(i*(9/5)+32))
console.log(m)
//    3. reduce() to calculate average temperature
let r=(temperatures.reduce((i,j)=>i+j))/temperatures.length
console.log("average is",r)
//   4. find() first temperature above 40
let findFirst=temperatures.find((i)=>i>40)
console.log("First temperature above 40",findFirst)
//    5. findIndex() of temperature 28
let fIndex=temperatures.findIndex(i=>i===28)
console.log("index of fIndex",fIndex)
