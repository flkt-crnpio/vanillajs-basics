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


async function getBookById(id) {
  const book = booksDB.find(book => book.id === id);
  if(!book) {
    const error = new Error();
    error.message = "Book not found";
    throw error;
  }
  return book;
}

async function getAuthorById(id) {
  const author = authorsDB.find(author => author.id === id);
  if(!author) {
    const error = new Error();
    error.message = "Author not found";
    throw error;
  }
  return author;
}

async function main() {
  try {
    const book = await getBookById(1);
    const author = await getAuthorById(book.authorId);
    console.log(`book ${book.title} written by ${author.name}`);
  }
  catch (err) {
    console.log(err.message);
  }
}

main();
