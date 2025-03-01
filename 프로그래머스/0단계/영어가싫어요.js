function solution(numbers) {
  const number = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let result = "";
  let currentWord = "";

  for (let i = 0; i < numbers.length; i++) {
    currentWord += numbers[i];

    if (number.hasOwnProperty(currentWord)) {
      result += number[currentWord];
      currentWord = "";
    }
  }

  return parseInt(result);
}
