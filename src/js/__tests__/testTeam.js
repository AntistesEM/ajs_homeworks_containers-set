import Team from '../team';
import Character from '../character';

test('Проверяем, что Set', () => {
  const team = new Team();

  expect(team.members).toBeInstanceOf(Set);
});

test('Проверяем add: вызов исключения', () => {
  const team = new Team();
  const hero = new Character('Ivan', 'Clirik');

  team.add(hero);

  expect(() => { team.add(hero); }).toThrow('Персонаж уже есть');
});

test('Проверяем add: добавляем персонажа', () => {
  const team = new Team();
  const hero = new Character('Ivan', 'Clirik');

  team.add(hero);

  expect(team.members.size).toBe(1);
});

test('Проверяем add: добавляем персонажа не Character', () => {
  const team = new Team();

  expect(() => { team.add({}); }).toThrow('Данные не принадлежат классу Character');
});

test('Проверяем метод addAll', () => {
  const team = new Team();
  const hero = new Character('Ivan', 'Clirik');
  const hero2 = new Character('Petr', 'Swordsman');
  const hero3 = new Character('Petr', 'Swordsman');

  team.addAll(hero, hero2, hero3, {});

  expect(team.members.size).toBe(2);
});

test('Проверка конвектора', () => {
  const team = new Team();
  const hero = new Character('Ivan', 'Clirik');
  const hero2 = new Character('Petr', 'Swordsman');

  team.addAll(hero, hero2);

  expect(team.toArray()).toBeInstanceOf(Array);
});

// test.each([
//   [new Team(), new Character('Ivan', 'Clirik'), 'Персонаж уже есть'],
//   [new Team(), {}, 'Данные не принадлежат классу Character'],
// ])('Исключение при дублировании или неверном типе персонажа', (team, firstCharacter, expectedErrorMessage) => {
//   team.add(firstCharacter);

//   expect(() => { team.add(firstCharacter); }).toThrow(new Error(expectedErrorMessage));
// });
