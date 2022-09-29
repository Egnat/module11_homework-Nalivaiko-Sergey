//Реализовать и протестировать функцию (хотя бы 1 тест).

//Напишите функцию, которая принимает строку и возвращает перевернутую строку.

export function reverseString(str) {
  reverseString = str.split('').reverse().join('');
  return(reverseString); //ES-6
}

/*function reverseString(str) {
  reverseString = str.split('').reverse().join('');
  return(reverseString);
}
module.exports = reverseString;*/ //ES-5