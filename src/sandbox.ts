// let numbers = reverse<number>([1, 2, 3, 4, 5])
// let strings = reverse<string>(["1, 2, 3, 4, 5"])

// function reverse<K>(items: K[]): K[] {
//     return items.reverse()
// }

// console.log(numbers, strings)

type User = {
    name: string;
    age: number;
}

const user: Pick<User, "name"> = {
    name: "Lola",
}

console.log(user)