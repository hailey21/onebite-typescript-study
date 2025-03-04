/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPeropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: '이정환',
  age: 27,
};

getPeropertyKey(person, 'name');
