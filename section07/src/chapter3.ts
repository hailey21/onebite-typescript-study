/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['1'],
};

/**
 * 인덱스 시그니쳐
 */
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1111,
  key2: 1212,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<String> = {
  key: 'value',
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: '111',
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: 'student';
  school: string;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

const developerUser: User<Developer> = {
  name: '이정환',
  profile: {
    type: 'developer',
    skill: 'TypeScript',
  },
};

// goToSchool(developerUser);

const studentUser: User<Student> = {
  name: '홍길동',
  profile: {
    type: 'student',
    school: '학교',
  },
};
