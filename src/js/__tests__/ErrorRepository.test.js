import ErrorRepository from '../ErrorRepository';

test('translate 1', () => {
  const translate = new ErrorRepository();
  const result = translate.tranclate('404');

  expect(result).toEqual('Не найдено');
});

test('translate 2', () => {
  const translate = new ErrorRepository();
  const result = translate.tranclate('4');

  expect(result).toEqual('Unknown error');
});
