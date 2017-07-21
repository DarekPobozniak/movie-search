import PaginationComponent from './Pagination';

test('Generaters proper amount of pagination items', () => {
  const totalPages = 2;
  const currentPage = 1;

  const itemsArray = PaginationComponent.buildItems(totalPages, currentPage);

  expect(itemsArray.length).toBe(2);
});

test('Generates proper pagination markup', () => {
  const totalPages = 2;
  const currentPage = 1;

  const expectedHtml = '<button type="button" class="pagination__item" data-index="1" disabled="disabled">1</button><button type="button" class="pagination__item" data-index="2">2</button>';

  const html = PaginationComponent.getHtml(totalPages, currentPage);

  expect(html).toMatch(expectedHtml);
});
