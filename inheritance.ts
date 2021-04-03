class Human {
  constructor(public name: string) {}
  sayHi(): string {
    return `Hello from ${this.name}`;
  }
}

const patrick = new Human('Patrick Mullot');

// console.log(patrick.sayHi());

// inheritance
class SuperHuman extends Human {
  heroName: string;
  constructor(name) {
    super(name);
    this.heroName = `Hero ${name}`;
  }

  superPower(): string {
    return `${this.heroName} pops treys!!!`;
  }
}

const steph = new SuperHuman('Steph Curry');

console.log(steph.superPower());
console.log(steph.sayHi());
