// Define the DOM elements
export const elements = {
  newBook: document.querySelector('#list'),
  bookList: document.querySelector('#books-list'),
  introduceBook: document.querySelector('#introduce-book'),
  addBookSection: document.querySelector('#add-book-form'),
  contactUsBtn: document.querySelector('#contact-us'),
  contactUs: document.querySelector('#contact-info'),
};

// Define the functions to handle the events
export const showBooksList = () => {
  elements.bookList.style.display = 'flex';
  elements.bookList.style.marginTop = '100px';
  elements.bookList.style.marginBottom = '100px';
  elements.addBookSection.style.display = 'none';
  elements.contactUs.style.display = 'none';
};

export const showAddBookForm = () => {
  elements.bookList.style.display = 'none';
  elements.addBookSection.style.display = 'flex';
  elements.addBookSection.style.marginTop = '100px';
  elements.addBookSection.style.marginBottom = '100px';
  elements.contactUs.style.display = 'none';
};

export const showContactUs = () => {
  elements.bookList.style.display = 'none';
  elements.addBookSection.style.display = 'none';
  elements.contactUs.style.display = 'flex';
  elements.contactUs.style.marginTop = '100px';
  elements.contactUs.style.marginBottom = '100px';
};
