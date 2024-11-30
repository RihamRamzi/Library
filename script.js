const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author},${pages} pages,${read ? `read` : `not read`}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("GOT", "IDK", 100, true);
addBookToLibrary("LOL", "IDK", 100, false);

const bookShelf = document.querySelector(".bookShelf");

function displayBook() {
  for (let book of myLibrary) {
    // created book
    const bookCover = document.createElement("div");
    bookCover.classList.add("book");
    // created Title
    const title = document.createElement("span");
    title.id = "T";
    title.textContent = book.title;
    // created Author
    const author = document.createElement("span");
    author.id = "A";
    author.textContent = book.author;
    // created pages
    const pages = document.createElement("span");
    pages.id = "P";
    pages.textContent = `Pages: ${book.pages}`;
    // created read
    const read = document.createElement("span");
    read.textContent = `Read: ${book.read}`;

    bookCover.appendChild(title);
    bookCover.appendChild(author);
    bookCover.appendChild(pages);
    bookCover.appendChild(read);
    bookShelf.appendChild(bookCover);
  }
}

displayBook();
