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
    const bookItemTitle = document.createElement('h2');
    bookItemTitle.textContent = book.title;
    bookItem.appendChild(bookItemTitle);
    const bookItemAuthor = document.createElement('p');
    bookItemAuthor.textContent = book.author;
    bookItem.appendChild(bookItemAuthor);
    bookList.appendChild(bookItem);
}

function displayAllBooks() {
    bookList.innerHTML =""; // refresh display
    myBooks.map(item => displayBook(item));
}
// Testing functionality
const testBook0 = new Book('Test Title', 'Test Author', 100, false);
const testBook1 = new Book('Test Title', 'Test Author', 100, false);

addBook(testBook0);
addBook(testBook1);


displayAllBooks(myBooks);
