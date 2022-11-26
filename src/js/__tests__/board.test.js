import Board from '../board';

test('Создание игрового поля', () => {
  const board = new Board();
  expect(board).toEqual(new Board());
});
