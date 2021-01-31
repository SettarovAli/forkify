import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandleClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      handler(+btn.dataset.goto);
    });
  }

  _generateMarkupButtons(curPage, btn) {
    return `
          <button data-goto="${
            btn === 'next' ? curPage + 1 : curPage - 1
          }" class="btn--inline pagination__btn--${
      btn === 'next' ? 'next' : 'prev'
    }">
            <span>Page ${btn === 'next' ? curPage + 1 : curPage - 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-${
      btn === 'next' ? 'right' : 'left'
    }"></use>
            </svg>
          </button>
      `;
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const next = this._generateMarkupButtons(currentPage, 'next');
    const prev = this._generateMarkupButtons(currentPage, 'prev');

    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return next;
    }

    // Last page
    if (currentPage === numPages && numPages > 1) {
      return prev;
    }

    // Other page
    if (currentPage < numPages) {
      return [next, prev].join();
    }

    // Page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();
