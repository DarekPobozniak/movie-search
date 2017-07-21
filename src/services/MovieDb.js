import FetchHandler from '../fetchHandler';

/**
 * MovieDb
 *
 * @export
 * @class MovieDb
 */
export default class MovieDb {
  /**
   * Creates an instance of MovieDb.
   * @param {Object} config MovieDb config
   * @param {string} config.baseUrl call api url
   * @param {string} config.apiKey MovieDb API key
   * @param {string} config.language language for the returned movies
   * @memberof MovieDb
   */
  constructor({ baseUrl, apiKey, language }) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.language = language;
  }

  /**
   * Gets MovieDb api url
   *
   * @readonly
   * @returns {string}
   * @memberof MovieDb
   */
  get apiUrl() {
    return `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=${this.language}`;
  }

  /**
   * Calls API MovieDb method to search movies
   *
   * @param {string} [query=''] movie title to be find
   * @param {number} [page=1] page number from the pagination
   * @returns {promise}
   * @memberof MovieDb
   */
  search(query = '', page = 1) {
    const url = `${this.apiUrl}&page=${page}&query=${encodeURIComponent(query)}`;

    return fetch(url)
      .then(FetchHandler.checkStatus)
      .then(FetchHandler.parseJSON)
      .catch(error => Promise.reject(error));
  }
}
