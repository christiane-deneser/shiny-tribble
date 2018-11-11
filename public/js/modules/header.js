const KEY_ENTER = 13,
  KEY_SPACE = 32;

class Header {
  constructor(el) {
    this.header = el;
    this.menuButton = el.querySelector('.js-nav-main-button');
    this.menuIcon = el.querySelector('.js-nav-main-icon use');
    this.navList = el.querySelector('.js-nav-main-list');
    this.headerWrapper = el.querySelector('.js-header-wrapper');
    this.menuButton.addEventListener('click', () => this.toggleNav());
    this.menuButton.addEventListener('keydown', (e) => this.detectKeys(e));
    this.init();
    window.addEventListener( 'resize', () => {
      window.requestAnimationFrame(() => this.init())
    });
  }

  init() {
    if(this.helper() === 'mobile') {
      this.close();
    } else {
      this.open();
    }
  }

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

  detectKeys( e ) {
    switch ( e.keyCode ) {
      case KEY_ENTER: {
        e.stopPropagation();
        e.preventDefault();
        this.toggleNav( e.target );
        break;
      }
      case KEY_SPACE: {
        e.stopPropagation();
        e.preventDefault();
        this.toggleNav( e.target );
        break;
      }
    }
  }

  open() {
    this.menuIcon.setAttribute('xlink:href', '#icon-close');
    this.navList.classList.remove('is-hidden');
    this.headerWrapper.classList.remove('is-hidden');
    /*ARIA*/
    this.menuButton.setAttribute('aria-expanded', 'true');
  }

  close() {
    this.menuIcon.setAttribute('xlink:href', '#icon-open');
    this.navList.classList.add('is-hidden');
    this.headerWrapper.classList.add('is-hidden');
    /*ARIA*/
    this.menuButton.setAttribute('aria-expanded', 'false');
  }

  toggleNav() {
    const navListIsHidden = this.navList.classList.contains('is-hidden');

    if (navListIsHidden) {
      this.open();
    } else {
      this.close();
    }
  }
}

module.exports = Header;
