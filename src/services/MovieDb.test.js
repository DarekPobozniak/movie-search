import MovieDb from './MovieDb';
import config from '../movieDbConfig';

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(url =>
    new Promise((resolve) => {
      resolve({
        ok: true,
        status: 200,
        json: () => ({
          url,
        }),
      });
    }),
  );
});

test('MovieDb api url is correct', () => {
  const MovieDbApi = new MovieDb(config);
  const properApiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=7865ca4c4fd2d00ff34dc331b1ca13b6&language=en-US';

  expect(MovieDbApi.apiUrl).toBe(properApiUrl);
});

test('page number is passed to the MovieDb url', () => {
  const MovieDbApi = new MovieDb(config);

  return MovieDbApi.search('quest', 3).then((response) => {
    expect(response.url).toMatch('&page=3');
  });
});

test('query string is escaped properly in the MovieDb url', () => {
  const MovieDbApi = new MovieDb(config);

  return MovieDbApi.search('tokio drift', 3).then((response) => {
    expect(response.url).toMatch('&query=tokio%20drift');
  });
});
