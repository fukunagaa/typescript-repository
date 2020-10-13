import { sample1 } from "./sample";

// String
const Hello = (name: string): string => {
  return "Hello " + name;
};

// Number
const Add = (num1: number, num2: number): number => {
  return num1 + num2;
};

// void
const Self = (lan: string): void => {
  console.log("your select: " + lan);
};

console.log(Hello("man!"));
console.log(Add(3, 5));
Self("woman");

sample1();
