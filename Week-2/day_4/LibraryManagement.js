/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise*/

class Book{
    title;
    author;
    pages;
    isAvailable=true

    borrow(){
      this.isAvailable=false
    }
    returnBook(){
        this.isAvailable=true
    }
    getInfo(){
        return console.log(`"The ${title} by ${author} ${pages} pages"`)
    }
    isLongBook(n){
        if(this.pages>300)
            return true
        else
            return false
    }
}


  //1. Create at least 5 book objects using the class:
    //  Example: "Harry Potter", "1984", "The Hobbit", etc.
let b1=new Book()
b1.title="Harry POtter"
b1.author="J.K Rowling"
b1.pages=400

let b2 = new Book()
b2.title = "1984"
b2.author = "George Orwell"
b2.pages = 328

let b3 = new Book()
b3.title = "The Hobbit"
b3.author = "J.R.R Tolkien"
b3.pages = 310

let b4 = new Book()
b4.title = "Atomic Habits"
b4.author = "James Clear"
b4.pages = 250

let b5 = new Book()
b5.title = "The Alchemist"
b5.author = "Paulo Coelho"
b5.pages = 208

 //2. Perform the following operations:
let books=[b1,b2,b3,b4,b5]
 //  i. Display info of all books
    console.log("All Books:")
    for(let b of books){
        console.log(b.getInfo)
    }  

//ii. Borrow 2 books and show their availability status 
b1.borrow()
b2.borrow()
console.log("\nBorrowed Books Status:")
console.log(b1.title, b1.isAvailable)
console.log(b3.title, b3.isAvailable)

// iii. Return 1 book and show updated status
b1.returnBook()
console.log("\nAfter Returning:")
console.log(b1.title, b1.isAvailable)

//  iv. Count how many books are "long books" (more than 300 pages)
let count = 0
for (let b of books) {
    if (b.isLongBook())
        count++
}
console.log("\nNumber of Long Books:", count)

//  v. List all available books
console.log("\nAvailable Books:")
for (let b of books) {
    if (b.isAvailable)
        console.log(b.title)
}