/**
 * Movie DB API version
 */
const apiVersion = 3;

/**
 * Config used to make requests to The Movie Database API
 * @type {Object}
 */
export default {
  baseUrl: `https://api.themoviedb.org/${apiVersion}`,
  apiKey: '7865ca4c4fd2d00ff34dc331b1ca13b6',
  language: 'en-US',
};
