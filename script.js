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

function createBook(e) {
    const title = e.target.form[0].value;
    const author = (e.target.form[1].value);
    const pages = (e.target.form[2].value);
    const completed = (e.target.form[3].checked);
    console.log(title, author, pages, completed)
    const book = new Book(title, author, pages, completed)
    addBook(book);
}

const addButton = document.getElementById('add');
addButton.addEventListener('click', createBook);


// Testing functionality
const testBook0 = new Book('Test Title', 'Test Author', 100, false);
const testBook1 = new Book('Test Title', 'Test Author', 100, false);

addBook(testBook0);
addBook(testBook1);


displayAllBooks(myBooks);
