class Search {
  constructor(el) {
    this.search = el;
    this.labelIcon = el.querySelector('.js-search-icon');
    this.input = el.querySelector('.js-search-input');
    this.submit = el.querySelector('.js-search-submit');

    this.init();
    window.addEventListener( 'resize', () => {
      window.requestAnimationFrame(() => this.init())
    });

    this.input.addEventListener('change', () => {
      if (this.input.value) {
        this.input.classList.add('is-shown');
      } else {
        this.input.classList.remove('is-shown');
      }
    });
  }


  init() {
    if(this.helper() === 'mobile') {
      this.labelIcon.classList.add('is-hidden');
      this.submit.classList.remove('visually-hidden');
    } else {
      this.labelIcon.classList.remove('is-hidden');
      this.submit.classList.add('visually-hidden');
    }
  }

  //TODO: exclude to separate Helper module
  helper() {
    const mqDesktop = window.matchMedia( '(min-width: 1024px)' ).matches,
      mqTablet = window.matchMedia( '(min-width: 768px)' ).matches,
      mqMobile = window.matchMedia( '(min-width: 320px)' ).matches;

    if ( mqDesktop ) {
      return 'desktop';
    } else if ( mqTablet ) {
      return 'tablet';
    } else if ( mqMobile ) {
      return 'mobile';
    }
  }

}

module.exports = Search;
