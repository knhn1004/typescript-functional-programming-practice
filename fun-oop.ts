// using composition with functional programming
const hasName = (name: string) => {
  return { name };
};

const canSayHi = (name: string) => {
  return {
    sayHi: (): string => `Hello, ${name}`,
  };
};

const Person = function (name) {
  return {
    ...hasName(name),
    ...canSayHi(name),
  };
};

const person = Person('Jeff');
console.log(person.sayHi());
