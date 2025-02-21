// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '이정환',
  nickname: 'winterlood',
  birth: '1997.01.07',
  bio: '안녕하세요',
  location: '부천시',
};

let user2: User = {
  id: 2,
  name: '이정환2',
  nickname: 'winterlood2',
  birth: '1997.01.08',
  bio: '안녕하세요2',
  location: '부천시2',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};
let contryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

// 인덱스 시그니처 타입은 규칙을 위반하지만 않으면 되기 때문에 빈 객체도 가능
let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 410,
};
