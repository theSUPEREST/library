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

Book.prototype.editBookInfo = function(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
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

    const bookItemDelete = document.createElement('button');
    bookItemDelete.textContent = "Delete";
    bookItemDelete.setAttribute('id', 'delete');
    bookItemDelete.addEventListener('click', deleteBook);
    bookItem.appendChild(bookItemDelete);

    const bookItemEdit = document.createElement('button');
    bookItemEdit.textContent = "Edit";
    bookItemEdit.setAttribute('id', 'edit');
    bookItemEdit.addEventListener('click', showEditBookForm);
    bookItem.appendChild(bookItemEdit);

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
    hideAddBookForm();
    const book = new Book(title, author, pages, completed)
    addBook(book);
    displayAllBooks(myBooks);
}

function editBookInfo(e) {
    if (!editBookForm[0].value){
        return;
    }
    const title = (editBookForm[0].value);
    const author = (editBookForm[1].value);
    const pages = (editBookForm[2].value);
    const completed = (editBookForm[3].checked);
    clearEditForm()
    hideEditBookForm();
    myBooks[e.target.parentElement.dataset.key].editBookInfo(title, author, pages, completed)
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
    hideAddBookForm();
}

function clearEditForm() {
    editBookForm[0].value = ''
    editBookForm[1].value = ''
    editBookForm[2].value = ''
    editBookForm[3].checked = false
    hideEditBookForm();
}

function showAddBookForm() {
    bookForm.classList.remove('slidden');
}
function hideAddBookForm() {
    bookForm.classList.add('slidden');
}
function showEditBookForm(e) {
    editBookForm.classList.remove('hidden');
    editBookForm.setAttribute('data-key', e.target.parentElement.dataset.key)
}
function hideEditBookForm() {
    editBookForm.classList.add('hidden');
}

// Add Book Form & Buttons
// const addBookForm = document.getElementById('add-book-form');

const addButton = document.getElementById('add');
addButton.addEventListener('click', createBook);

const cancelButton = document.getElementById('cancel');
cancelButton.addEventListener('click', clearForm);

const addBookButton = document.getElementById('add-menu-btn');
addBookButton.addEventListener('click', showAddBookForm);

// Edit Form & Buttons
const editBookForm = document.getElementById('edit-book-form');

const editFormButton = document.getElementById('edit-edit');
editFormButton.addEventListener('click', editBookInfo)
const cancelEditForm = document.getElementById('edit-cancel');
cancelEditForm.addEventListener('click', clearEditForm)




// Testing functionality


//displayAllBooks(myBooks);
