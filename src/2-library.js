// Problem 2: Composition - Library and Book
// Implement your Book and Library classes below

class Book {

  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }
}

class Library {
  #books = [];
  #checkedOut = [];
  constructor(name) {
    this.name = name;
  }

  get books() {
    return this.#books;
  }

  get checkedOut() {
    return this.#checkedOut;
  }

  addBook(book) {
    this.#books.push(book);
  }

  checkoutBook(title) {
    const index = this.#books.findIndex(book => book.title === title);
    if (index === -1) {
      return false
    }
    const remove = this.#books.splice(index, 1)[0];
    this.#checkedOut.push(remove);
    remove.isAvailable = false;
    return true
  }

  returnBook(title) {
    const index = this.#checkedOut.findIndex(book => book.title === title);
    if (index === -1) {
      return false
    }
    const remove = this.#checkedOut.splice(index, 1)[0];
    this.#books.push(remove);
    remove.isAvailable = true;
    return true
  }
}

module.exports = { Book, Library };
