class SearchView {
  _parentEl = document.querySelector('.search');

  // Get query from search input
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  // Clear search input
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  // Handler for submit search form
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
