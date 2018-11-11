/**
 * CSS
 * */
import '../css/style.scss';

/**
 * JAVASCRIPT
 * */
import Header from './modules/header';

{
  const headers = document.querySelectorAll('.js-header');
  headers.forEach((el) => {
    new Header(el);
  });
}
