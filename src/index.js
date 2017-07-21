import MovieDb from './services/MovieDb';
import MovieListComponent from './components/MovieList';
import PaginationComponent from './components/Pagination';
import config from './movieDbConfig';

import './styles/main.scss';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form__input');
const pagination = document.querySelector('.pagination');

const MovieDbApi = new MovieDb(config);
const MovieList = new MovieListComponent();
const Pagination = new PaginationComponent(pagination);

const handleSearch = (pageNo = 1) => {
  const query = searchInput.value.trim();

  if (query) {
    MovieDbApi.search(query, pageNo)
      .then((response) => {
        MovieList.render(response.results);
        Pagination.render(response.total_pages, response.page);
      });
  }
};

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  handleSearch();
}, false);

pagination.addEventListener('click', (event) => {
  const index = event.target.dataset.index;

  if (index) {
    handleSearch(index);
  }
}, false);
