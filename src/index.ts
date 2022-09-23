console.log('Hello world!');

interface User {
  ageInMonths: number;
  name: string;
}

const safeFindUserAgeByName = (
  users: User[],
  name: string
): Promise<number> => {
  if (users.length == 0) {
    return Promise.reject(new Error('There are no users!'));
  }
  const user = users.find((u) => u.name === name);
  if (!user) {
    return Promise.reject(new Error('User not found!'));
  }
  return Promise.resolve(user.ageInMonths);
};

const users = [
  { ageInMonths: 34, name: 'Remo' },
  { ageInMonths: 2, name: 'Leo' }
];

safeFindUserAgeByName(users, 'Remo').then((userAge1) =>
  console.log(`Remo is ${userAge1 / 12} years old!`)
);

safeFindUserAgeByName([], 'Leo') // Error
  .then((userAge1) => console.log(`Leo is ${userAge1 / 12} years old!`));
