//! #1 Case
// const func = (n: number): string[] => {
//   let answer: string[] = [];

//   for (let i = 1; i <= n; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       answer.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       answer.push("Fizz");
//     } else if (i % 5 === 0) {
//       answer.push("Buzz");
//     } else {
//       answer.push(i.toString());
//     }
//   }

//   return answer;
// };

// console.log(func(15));

//! #2 Case
// type Conditions = {
//   condition: (n: number) => boolean;
//   output: string;
// };

// const secondFunc = (n: number[]): string[] => {
//   let answer: string[] = [];

//   let min: number = Math.min(...n);
//   let max: number = Math.max(...n);

//   const conditionsCollection: Conditions[] = [
//     { condition: (n) => n % 3 === 0 && n % 5 === 0, output: "FizzBuzz" },
//     { condition: (n) => n % 5 === 0, output: "Buzz" },
//     { condition: (n) => n % 3 === 0, output: "Fizz" },
//   ];

//   for (let i = min; i <= max; i += 1) {
//     const matchedCondition = conditionsCollection.find((item) => item.condition(i));

//     if (matchedCondition) {
//       answer.push(matchedCondition.output);
//     } else {
//       answer.push(i.toString());
//     }
//   }

//   return answer;
// };

// console.log(secondFunc([1, 15]));
// console.log(secondFunc([15, 1]));

//! #3 Case

type Condition = {
  condition: (n: number) => boolean;
  output: string;
};

const thirdFunc = (...numbers: number[]): string[] => {
  let answer: string[] = [];

  const conditions: Condition[] = [
    { condition: (n) => n % 3 === 0 && n % 5 === 0, output: "FizzBuzz" },
    { condition: (n) => n % 5 === 0, output: "Buzz" },
    { condition: (n) => n % 3 === 0, output: "Fizz" },
  ];

  return numbers.map((num) => {
    const matchedCondition = conditions.find((condition) => condition.condition(num));
    return matchedCondition ? matchedCondition.output : num.toString();
  });
};

console.log(thirdFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));
