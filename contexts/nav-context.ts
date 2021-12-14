import { createContext } from 'react';

const MenuContext = createContext({
  isMenuOpen: false,
  toggleMenuMode: () => ({}),
} as { isMenuOpen: boolean; toggleMenuMode: () => void });
export default MenuContext;

// type boxNames = typeof optionKeys[number];
// type BA = Record<boxNames as string[], string>;

// type b = keyof IA;
// const map = new Map<keyof IA, string>();
// map.get('first');
// map.forEach(val => {
//   return val;
// });

// interface User {
//   name: string;
//   age: number;
// }
// const user: User = {
//   name: 'John Smith',
//   age: 20,
// };

// const optionKeys = ['first', 'second'] as const;
// type IA = {
//   [key in typeof optionKeys[number]]: string;
// };
// interface IA {
//   first: string;
//   second: string;
// }
// const a: IA = {
//   first: 'foo',
//   second: 'bar',
// };

// const getKeyValue = <U extends keyof T, T extends object>(key: U) => {
//   return (obj: T) => obj[key];
// };
// const getFirst = getKeyValue<keyof IA, IA>('first')(a);
// console.log(getFirst);
// type t = string & keyof IA;
// function getKey<T>(x: T): keyof T {
//   // Proposed: This should be OK
//   return Object.keys(x);
// }
// getKeyValue<IA, keyof IA>(a);
// optionKeys.forEach(key => a[key]);
// function keysOf<T>(obj: T) {
//   return <Array<keyof T>>Object.keys(obj);
// }
// type k = `${keyof IA}`;
// keysOf(a).forEach(key => a[key]);
// Object.keys(a).forEach((l) => {
//   console.log(l as k);
// });
// .forEach(key => getKeyValue<keyof IA, IA>(key)(a));
