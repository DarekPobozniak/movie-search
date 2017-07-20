/**
 * Defines a custom response handler for window.fetch
 * @type {Object}
 */
const Fetch = {
  /**
   * Rejects Promise on HTTP non-2xx error statuses
   *
   * @param  {Object} response Contains: type, url, useFinalURL, status, ok, statusText, headers
   * @returns {Object}         Response object or an error object
   */
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }

    return Promise.reject(new Error(`${response.statusText} (${response.status})`));
  },

  /**
   * Converts the raw data to JavaScript object
   *
   * @param {Object} response Response object
   * @returns {Object}        JSON object
   */
  parseJSON(response) {
    return response.json();
  },
};

export default Fetch;
