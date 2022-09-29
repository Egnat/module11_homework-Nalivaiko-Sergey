//Реализовать и протестировать функцию (хотя бы 1 тест).

//Напишите функцию, которая принимает строку и возвращает перевернутую строку.


import { reverseString } from './reverseString.js';

describe("test reverseString", () => {
  it("revert string Hello to equal olleH", () => {
    let result = (reverseString("Hello"));
  	expect(result).toBe("olleH");
  });
}); //ES-6

/*const reverseString = require('./reverseString.js');

xtest("test reverseString, revert string Hello to equal olleH", () => {
   expect(reverseString("Hello")).toBe("olleH");
});*/ //ES-5