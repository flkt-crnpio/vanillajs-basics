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
// any promises had this methods .then .catch .finally
function getBookById(id) {
  return new Promise((resolve, reject) => {
    const book = booksDB.find(book => book.id === id);
    if(!book) {
      const error = new Error();
      error.message = "Book not found";
      reject(error);
    }
    resolve(book);
  });
}

function getAuthorById(id){
  return new Promise((resolve, reject) => {
    const author = authorsDB.find(author => author.id === id);
    if(!author) {
      const error = new Error();
      error.message = "Author not found";
      reject(error);
    }
    resolve(author);
  })
}

getBookById(1)
  .then(book => {
    return getAuthorById(book.authorId)
  })
  .then(author => {
    console.log(`the book was written by ${author.name}`);
  })
  .catch(err => {
    console.error(err.message);
  })
