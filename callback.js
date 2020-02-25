const booksDB = [
  {
    id: 1,
    title: "Clean Code",
    authorId: 1
  },
  {
    id: 2,
    title: "The pragmatic programmer",
    authorId: 2
  },
  {
    id: 3,
    title: "Web development with Node.js",
    authorId: 3
  }
];

const authorsDB = [
  {
    id: 1,
    name: "Some guy"
  },
  {
    id: 2,
    name: "Pinoccio"
  }
];

function getBookById(id, callback) {
  const book = booksDB.find(book => book.id === id);
  if(!book) {
    const error = new Error();
    error.message = "Book not found";
    return callback(error);
  }
  callback(null, book);
}

function getAuthorById(id, callback){
  const author = authorsDB.find(author => author.id === id);
  if(!author) {
    const error = new Error();
    error.message = "Author not found";
    return callback(error);
  }
  callback(null, author);
}


getBookById(2, (err, book) => {
  if(err) {
    return console.log(err.message);
  }
  getAuthorById(book.authorId, (err, author) => { // callback hell means to have too many nested functions
    if(err) {
      return console.log(err.message);
    }
    console.log(`this book ${book.title} was writen by ${author.name}`)
  })
  return console.log(book);
});
