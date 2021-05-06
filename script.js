let myBooks = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
}

function addBook(book) {
    myBooks.push(book);
}



const bookList = document.getElementById('book-list');
const bookForm = document.getElementById('add-book-form');

function displayBook(book) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('data-key', myBooks.indexOf(book))

    const bookItemTitle = document.createElement('h2');
    bookItemTitle.textContent = book.title;
    bookItem.appendChild(bookItemTitle);

    const bookItemAuthor = document.createElement('p');
    bookItemAuthor.textContent = book.author;
    bookItem.appendChild(bookItemAuthor);

    const bookItemDelete = document.createElement('button');
    bookItemDelete.textContent = "Delete";
    bookItemDelete.setAttribute('id', 'delete');
    bookItemDelete.addEventListener('click', deleteBook);
    bookItem.appendChild(bookItemDelete);

    const bookItemCheckbox = document.createElement('input');
    bookItemCheckbox.setAttribute('type', 'checkbox');
    if (book.read === true) {
        bookItemCheckbox.checked = true;
    }
    bookItemCheckbox.addEventListener('click', (e) => {
        myBooks[e.target.parentElement.dataset.key].toggleReadStatus()
    });

    const bookItemCheckboxLabel = document.createElement('label');
    bookItemCheckboxLabel.textContent = ('Completed?');
    bookItem.appendChild(bookItemCheckboxLabel);

    bookItem.appendChild(bookItemCheckbox);


    bookList.appendChild(bookItem);
}



function displayAllBooks() {
    bookList.innerHTML =""; // refresh display
    myBooks.map(item => displayBook(item));
}

function createBook() {
    if (!bookForm[0].value){
        return;
    }
    const title = (bookForm[0].value);
    const author = (bookForm[1].value);
    const pages = (bookForm[2].value);
    const completed = (bookForm[3].checked);
    clearForm()
    const book = new Book(title, author, pages, completed)
    addBook(book);
    displayAllBooks(myBooks);
}

function deleteBook(e) {
    const index = e.target.parentElement.dataset.key;
    myBooks.splice(index, 1);
    displayAllBooks();
}

function clearForm() {
    bookForm[0].value = ''
    bookForm[1].value = ''
    bookForm[2].value = ''
    bookForm[3].checked = false
}

const addButton = document.getElementById('add');
addButton.addEventListener('click', createBook);

const cancelButton = document.getElementById('cancel');
cancelButton.addEventListener('click', clearForm);

const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', deleteBook)

// Testing functionality


//displayAllBooks(myBooks);
