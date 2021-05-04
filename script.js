let myBooks = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBook(book) {
    myBooks.push(book);
}

const bookList = document.getElementById('book-list');

function displayBook(book) {
    const bookItem = document.createElement('div');
    bookItem.textContent = book.title;
    bookList.appendChild(bookItem);
}

function displayAllBooks() {
    bookList.innerHTML ="";
    myBooks.map(item => displayBook(item));
}

const testBook0 = new Book('Test Title', 'Test Author', 100, false);
const testBook1 = new Book('Test Title', 'Test Author', 100, false);

addBook(testBook0);
addBook(testBook1);


displayAllBooks(myBooks);
