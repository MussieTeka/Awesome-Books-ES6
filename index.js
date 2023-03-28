/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

import BookList from './modules/bookList.js';
import {
  elements,
  showBooksList,
  showAddBookForm,
  showContactUs,
} from './modules/elements.js';

import { DateTime, updateTime } from './modules/time.js ';

const myBookList = new BookList();

elements.newBook.addEventListener('click', showBooksList);
elements.introduceBook.addEventListener('click', showAddBookForm);
elements.contactUsBtn.addEventListener('click', showContactUs);

updateTime();
setInterval(updateTime, 1000);
