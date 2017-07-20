import MovieListComponent from './MovieList';

test('Function trimString works properly', () => {
  const baseString = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum accusamus excepturi delectus quasi eveniet amet totam a aliquid fugiat reprehenderit. Voluptate, quidem, doloremque! Harum dolor nobis, incidunt nam nemo officiis.';
  const expectedString = 'Lorem i...';

  expect(MovieListComponent.trimString(baseString, 7)).toBe(expectedString);
});

test('Renders html movie list', () => {
  document.body.innerHTML = `
    <div class="movie-list"></div>
    <template id="movie-item">
      <article class="movie-list__item">
        <h3 class="movie-list__title"></h3>
        <p class="movie-list__description"></p>
      </article>
    </template>`;

  const resultsArray = [
    {
      original_title: 'Tokio Drift',
      overview: 'Short description',
    },
  ];

  const expectedHtml = `
      <article class="movie-list__item">
        <h3 class="movie-list__title">Tokio Drift</h3>
        <p class="movie-list__description">Short description</p>
      </article>`;

  const MovieList = new MovieListComponent();
  const movieList = document.querySelector('.movie-list');

  MovieList.render(resultsArray);

  expect(movieList.innerHTML).toMatch(expectedHtml);
});
