/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};
type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};
type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name} 님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case 'ADMIN':
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case 'MEMBER':
      console.log(`${user.name}님 현재까지 ${user.point}명 강퇴했습니다.`);
      break;
    case 'GUEST':
      console.log(`${user.name}님 현재까지 ${user.visitCount}명 강퇴했습니다.`);
      break;
  }
}

// 비동기 작업의 결과를 처리하는 객체
type AcyncTask = LoadingTask | FailedTask | SuccessType;

type LoadingTask = {
  state: 'LOADING';
};

type FailedTask = {
  state: 'FAILED';
  error: {
    message: string;
  };
};

type SuccessType = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

function processResult(task: AcyncTask) {
  switch (task.state) {
    case 'LOADING':
      console.log('로딩중');
      break;
    case 'FAILED':
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    case 'SUCCESS':
      console.log(`성공 : ${task.response.data}`);
      break;
  }
}

const loading: AcyncTask = {
  state: 'LOADING',
};

const failed: AcyncTask = {
  state: 'FAILED',
  error: {
    message: '오류 발생 원인은~~',
  },
};

const success: AcyncTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터~~',
  },
};
