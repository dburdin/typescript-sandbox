//! #1 Case
// const func = (n: number): string[] => {
//   let answer: string[] = [];
const thirdFunc = (...numbers) => {
    let answer = [];
    const conditions = [
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
