const bookShelf = document.querySelector(".bookShelf");
const addBook = document.querySelector("#addBook");
const form = document.querySelector(".form");
// form input
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
// create Btn
const createBook = document.querySelector("#add");
// form
const bookForm = document.querySelector("#form");

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return `${title} by ${author},${pages} pages`;
  };
}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
}

function displayBook() {
  bookShelf.textContent = "";

  myLibrary.forEach((book) => {
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
    author.textContent = `By ${book.author}`;
    // created pages
    const pages = document.createElement("span");
    pages.id = "P";
    pages.textContent = `Pages: ${book.pages}`;
    // created read,status and eventListener
    const read = document.createElement("span");
    read.textContent = `Read:`;
    read.id = "R";
    const statusSpan = document.createElement("span");
    statusSpan.textContent = ` Click`;
    statusSpan.id = "status";
    statusSpan.addEventListener("click", () => {
      if (statusSpan.textContent == " Yes") {
        statusSpan.textContent = " No";
        statusSpan.id = "notRead";
      } else {
        statusSpan.textContent = " Yes";
        statusSpan.id = "read";
      }
    });
    // Del btn
    const delBtn = document.createElement("button");
    delBtn.textContent = `Remove`;
    delBtn.classList.add("Btn");
    delBtn.addEventListener("click", () => {
      let bookIndex = myLibrary.findIndex(
        (book) => book.title === title.textContent
      );
      if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
      }
      bookCover.remove();
    });

    bookCover.appendChild(title);
    bookCover.appendChild(author);
    bookCover.appendChild(pages);
    read.appendChild(statusSpan);
    bookCover.appendChild(read);
    bookCover.appendChild(delBtn);
    bookShelf.appendChild(bookCover);
  });
}

addBook.addEventListener("click", () => {
  form.style.display = "flex";
  addBook.style.display = "none";
});

// create book function
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const bookPages = pages.value;

  addBookToLibrary(bookTitle, bookAuthor, bookPages);
  displayBook();
  bookForm.reset();
  addBook.style.display = "block";
  form.style.display = "none";
});
