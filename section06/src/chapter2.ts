/**
 * 접근제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 필드
  //   private name: string;
  //   protected age: number;
  //   position: string;

  // 생성자 : 접근제어자를 달면 자동으로 필드를 만들어줌 - 정의 생략, 값 자동 할당
  constructor(private name: string, protected age: number, public position: string) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log(`일함 ${this.name}`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    this.age;
    // this.name;
  }
}

const employee = new Employee('이정환', 27, 'developer');

// employee.name = '홍길동';
// employee.age = 30;
employee.position = 'designer';

console.log(employee);
