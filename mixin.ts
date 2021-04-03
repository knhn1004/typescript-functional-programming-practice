// using composition with functional programming
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

class CanSayHi {
  name: string;

  sayHi(): string {
    return `Hello, ${this.name}`;
  }
}

class HasSuperPower {
  heroName: string;

  superPower(): string {
    return `${this.heroName} ***`;
  }
}

class SuperHero implements CanSayHi, HasSuperPower {
  heroName: string;

  constructor(public name) {
    this.heroName = `SUPER ${name}`;
  }
  superPower: () => string;
  sayHi: () => string;
}

applyMixins(SuperHero, [CanSayHi, HasSuperPower]);

const ts = new SuperHero('Typescript');
console.log(ts.sayHi());
console.log(ts.superPower());
