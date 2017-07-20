import MovieDb from './services/MovieDb';
import MovieListComponent from './components/MovieList';
import config from './movieDbConfig';

import './styles/main.scss';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form__input');

const MovieDbApi = new MovieDb(config);
const MovieList = new MovieListComponent();

const handleSearch = (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (query) {
    MovieDbApi.search(query)
      .then((response) => {
        MovieList.render(response.results);
      });
  }
};

searchForm.addEventListener('submit', handleSearch, false);
