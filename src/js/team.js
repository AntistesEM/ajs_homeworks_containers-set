import Character from './character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(personCharacter) {
    if (personCharacter instanceof Character) {
      if (!this.members.has(personCharacter)) {
        this.members.add(personCharacter);
      } else {
        throw new Error('Персонаж уже есть');
      }
    } else {
      throw new Error('Данные не принадлежат классу Character');
    }
  }

  addAll(...personCharacter) {
    personCharacter.forEach((person) => {
      if (person instanceof Character) {
        if (!Array.from(this.members)
          .some((member) => member.name === person.name && member.type === person.type)) {
          this.members.add(person);
        }
      }
    });
  }

  // addAll(...data) {
  //   data.forEach((item) => {
  //     this.members.add(item);
  //   });
  // }

  toArray() {
    return Array.from(this.members);
  }
}
