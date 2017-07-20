/**
 * MovieList
 *
 * @export
 * @class MovieList
 */
export default class MovieList {
  /**
   * Creates an instance of MovieList.
   * @memberof MovieList
   */
  constructor() {
    this.movieList = document.querySelector('.movie-list');
    this.movieItem = document.querySelector('#movie-item');
    this.movieTitle = this.movieItem.content.querySelector('.movie-list__title');
    this.movieDescription = this.movieItem.content.querySelector('.movie-list__description');
  }

  /**
   * Trims long string to wanted length
   *
   * @static
   * @param {string} string String to be trimmed
   * @param {number} [maxLength=130] Maximum string lenght
   * @returns {string}
   * @memberof MovieList
   */
  static trimString(string, maxLength = 130) {
    return string.length > maxLength ? `${string.slice(0, maxLength)}...` : string;
  }

  /**
   * Renders movies on the screen
   *
   * @param {Array } movies Array with movies
   * @memberof MovieList
   */
  render(movies) {
    this.movieList.innerHTML = '';

    movies.forEach((movie) => {
      this.movieTitle.textContent = movie.original_title;
      this.movieDescription.textContent = MovieList.trimString(movie.overview);

      // clone movie item and insert into the list
      this.movieList.appendChild(this.movieItem.content.cloneNode(true));
    });
  }
}
