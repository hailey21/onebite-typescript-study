/**
 * unknown 타입 : 전체 집합
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = true;
  let c: unknown = 'hello';
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let never1: never = 10;
  //   let never2: never = 'string';
  //   let never3: never = true;
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log('hi');
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * Any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  //   neverVar = anyVar;
}
