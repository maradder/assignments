const addNumbers = (...numbers) => numbers.reduce((sum, number) => (sum + number), 0);

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8));

