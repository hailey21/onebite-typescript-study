/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;
// StringNumberSwitch<boolean>
// StringNumberSwitch<number>
// StringNumberSwitch<string>

// number
// string
// number

/**
 * 실용적인 예제
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 결과
// number | never | boolean -> number | boolean
// never타입은 공집합 타입이기 때문에 없어짐

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 1단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 결과
// string
