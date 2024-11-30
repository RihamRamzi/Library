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

addBookToLibrary("GOT", "IDK", 100);
addBookToLibrary("LOL", "IDK", 100);

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
    delBtn.id = "Del";
    delBtn.addEventListener("click", () => {
      bookCover.remove();
    });

    bookCover.appendChild(title);
    bookCover.appendChild(author);
    bookCover.appendChild(pages);
    read.appendChild(statusSpan);
    bookCover.appendChild(read);
    bookCover.appendChild(delBtn);
    bookShelf.appendChild(bookCover);
  }
}

displayBook();
