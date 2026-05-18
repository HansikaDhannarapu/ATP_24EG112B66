//ASSIGNMENT 4: Movie Streaming Platform

//You are working on a movie recommendation system.

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


//    1. filter() only "Sci-Fi" movies
let f=movies.filter((i)=>i.genre==="Sci-Fi")
  console.log(f)
//2. map() to return:
  //          "Inception (8.8)"
let m=movies.map((i)=>i.title +'('+i.rating+')')
  console.log(m)
//  3. reduce() to find average movie rating
let r=movies.reduce((i,j)=>i+j.rating,0)/movies.length
  console.log(r)
//4. find() movie "Joker"
let fi=movies.find((i)=>i.title==="Joker")
  console.log(fi)
//5. findIndex() of "Avengers"
let fIndex=movies.findIndex((i)=>i.title==="Avengers")
  console.log(fIndex)
