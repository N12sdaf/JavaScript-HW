
let books = [
    [1, "Start with why", "Simon Sinek", 20.50, 10],
    [2, "But how do it know", "J. Clark Scott", 15.75, 15],
    [3, "Clean Code", "Robert Cecil Martin", 75, 12],
    [4, "Zero to One", "Peter Thiel", 15, 14],
    [5, "You don't know JS", "Kyle Simpson", 55, 13]

  ];  
  function addBook (bookId, title, author, price, quantity) {

    let bookNumber = books.length + 1;
    books.push([bookId, title, author, price, quantity]);
  }
  
  
  function editBook(bookNumber, title, author, price, quantity) {
    if (bookNumber > 0 && bookNumber <= books.length) {
      books[bookNumber - 1] = [bookNumber, books[bookNumber - 1][1], title, author, price, quantity];
    } else {
      console.log("Invalid book number");
    }
  }
  
  function deleteBook(bookNumber) {
    if (bookNumber > 0 && bookNumber <= books.length) {
      books.splice(bookNumber - 1, 1);
      for (let i = 0; i < books.length; i++) {
        books[i][0] = i + 1;
      }
    } else {
      console.log("Invalid book number");
    }
  }
  
 
  function viewBook(bookNumber) {
    if (bookNumber > 0 && bookNumber <= books.length) {
      console.log("Book Id: " + books[bookNumber - 1][0]);
      console.log("Title: " + books[bookNumber - 1][1]);
      console.log("Author: " + books[bookNumber - 1][2]);
      console.log("Price: $" + books[bookNumber - 1][3]);
      console.log("Quantity: " + books[bookNumber - 1][4]);
    } else {
      console.log("Invalid book number");
    }
  }
  
  function inquireBook(query) {
    for (let i = 0; i < books.length; i++) {
      if (
        books[i][0] === query ||
        books[i][1] === query ||
        books[i][2] === query
      ) {
        viewBook(i + 1);
        return;
      }
    }
    console.log("Book not found");
  }
  
  function sellBook(bookName, quantity, availableBalance) {
    for (let i = 0; i < books.length; i++) {
      if (books[i][1].toLowerCase() === bookName.toLowerCase()) {
        if (quantity <= books[i][4] && quantity * books[i][3] <= availableBalance) {
          books[i][4] -= quantity;
          availableBalance -= quantity * books[i][3];
          console.log("Invoice:");
          console.log("Book Name: " + bookName);
          console.log("Quantity: " + quantity);
          console.log("Total Price: $" + quantity * books[i][3]);
          return;
        } else {
          console.log("Insufficient quantity or balance");
          return;
        }
      }
    }
    console.log("Book not found");
  }

  console.log("task 1");
  //addBook(3, "Book 3", "Author 3", 18.99, 12);
  //viewBook(3);
  //editBook(3, "Updated Book 3", "Updated Author 3", 21.99, 10);
  //deleteBook(3);
  console.log("task 2");
  //inquireBook("But how do it know");
  console.log("task 3");
  //sellBook("But how do it know", 5, 90);
  