/**
 * CSS
 * */
import '../css/style.scss';

/**
 * JAVASCRIPT
 * */
import Header from './modules/header';
import Search from './modules/search';

{
  const headers = document.querySelectorAll('.js-header');
  headers.forEach((el) => {
    new Header(el);
  });
}

{
  const search = document.querySelectorAll('.js-search');
  search.forEach((el) => {
    new Search(el);
  });
}
