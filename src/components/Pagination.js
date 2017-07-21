/**
 * Pagination
 *
 * @export
 * @class Pagination
 */
export default class Pagination {
  constructor(pagination) {
    this.pagination = pagination;
  }

  /**
   * Get pagination item markup
   *
   * @static
   * @param {number} [totalPages=1] Total pages number
   * @param {number} [currentPage=1] Active page number
   * @returns {Array}
   * @memberof Pagination
   */
  static buildItems(totalPages = 1, currentPage = 1) {
    return Array.from({ length: totalPages }, (v, k) =>
      `<button type="button" class="pagination__item" data-index="${k + 1}"${(k + 1) === currentPage ? ' disabled="disabled"' : ''}>${k + 1}</button>`,
    );
  }

  /**
   * Gets generated html markup
   *
   * @static
   * @param {number} [totalPages=1] Total pages number
   * @param {number} [currentPage=1] Active page number
   * @returns {string}
   * @memberof Pagination
   */
  static getHtml(totalPages = 1, currentPage = 1) {
    return Pagination.buildItems(totalPages, currentPage).join('');
  }

  /**
   * Renders pagination html
   *
   * @param {number} [totalPages=1] Total pages number
   * @param {number} [currentPage=1] Active page number
   * @memberof Pagination
   */
  render(totalPages = 1, currentPage = 1) {
    const items = Pagination.getHtml(totalPages, currentPage);

    this.pagination.innerHTML = items;
  }
}
