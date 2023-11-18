import Character from '../character';

test('Создаем персонажа', () => {
  const hero = new Character('Ivan', 'Clirik');
  const etalon = { name: 'Ivan', type: 'Clirik' };

  expect(hero).toEqual(etalon);
});
